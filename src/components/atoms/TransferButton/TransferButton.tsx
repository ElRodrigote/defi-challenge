import React, { useState } from "react";
import Button from "@mui/material/Button";
import Notify from "bnc-notify";
import Web3 from "web3";

import { DAPP_ID, getCustomTokenContract, parseAmount } from "utils";
import { IERC20Token } from "utils/interfaces";

interface ITxDetails {
  from: string;
  to: string;
  value: string;
}

type TransferButtonProps = {
  addressFrom?: string;
  balanceInWei?: string;
  selectedToken: IERC20Token;
  targetAddress?: string;
  transferAmount: string;
};

const provider = window.ethereum;
const web3 = new Web3(provider);

const estimateGas = (txDetails: ITxDetails) => () =>
  web3.eth.estimateGas(txDetails).then((gas) => gas.toString());

const gasPrice = web3.eth.getGasPrice;

const notify = Notify({
  dappId: DAPP_ID,
  darkMode: true,
  networkId: 4,
  onerror: (error) => {
    console.log("Error on transaction: ", error);
  },
});

const sendTransactionTransfer =
  (contract: any, addressFrom: string, targetAddress: string, amount: string) =>
  (): Promise<string> =>
    new Promise((resolve, reject) =>
      contract.methods
        .transfer(targetAddress, amount)
        .send({ from: addressFrom })
        .on("transactionHash", resolve)
        .catch(reject)
    );

const sendTransactionApprove =
  (contract: any, addressFrom: string, tokenAddress: string, amount: string) =>
  (): Promise<string> =>
    new Promise((resolve, reject) =>
      contract.methods
        .approve(tokenAddress, amount)
        .send({ from: addressFrom })
        .on("transactionHash", resolve)
        .catch(reject)
    );

const TransferButton = ({
  addressFrom,
  balanceInWei,
  selectedToken,
  targetAddress,
  transferAmount,
}: TransferButtonProps) => {
  const [isTransactionLoading, setIsTransactionLoading] = useState(false);
  const tokenContract = getCustomTokenContract(
    selectedToken.abi,
    selectedToken.address
  );

  const transferAmountInWei = parseAmount(
    transferAmount,
    selectedToken.decimals,
    "toWei"
  );

  const txDetailsApprove = {
    from: addressFrom,
    value: transferAmountInWei,
  };

  const txDetailsTransfer = {
    from: addressFrom,
    to: targetAddress,
    value: transferAmountInWei,
  };

  const approveToken = async () => {
    const { emitter } = notify.transaction({
      txDetails: txDetailsApprove,
      balance: balanceInWei,
      gasPrice,
      // estimateGas: estimateGas(txDetailsApprove as ITxDetails),
      sendTransaction: sendTransactionApprove(
        tokenContract,
        addressFrom as string,
        selectedToken.address,
        transferAmountInWei
      ),
    });

    emitter.on("txRequest", () => {
      setIsTransactionLoading(true);
    });
    emitter.on("txConfirmed", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txFailed", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txError", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txSendFail", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txUnderPriced", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("nsfFail", () => {
      setIsTransactionLoading(false);
    });
  };

  const transferToken = async () => {
    const { emitter } = notify.transaction({
      txDetails: txDetailsTransfer,
      balance: balanceInWei,
      gasPrice,
      // estimateGas: estimateGas(txDetailsTransfer as ITxDetails),
      sendTransaction: sendTransactionTransfer(
        tokenContract,
        addressFrom as string,
        targetAddress as string,
        transferAmountInWei
      ),
    });

    emitter.on("txRequest", () => {
      setIsTransactionLoading(true);
    });
    emitter.on("txConfirmed", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txFailed", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txError", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txSendFail", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("txUnderPriced", () => {
      setIsTransactionLoading(false);
    });
    emitter.on("nsfFail", () => {
      setIsTransactionLoading(false);
    });
  };

  return (
    <div>
      <Button
        disabled={isTransactionLoading}
        onClick={approveToken}
        size="large"
        variant="contained"
      >
        Approve Token
      </Button>
      <Button
        disabled={isTransactionLoading}
        onClick={transferToken}
        size="large"
        variant="contained"
      >
        Transfer Token
      </Button>
    </div>
  );
};

export default TransferButton;
