import React, { useState } from "react";
import { Grid } from "@mui/material";
import Notify from "bnc-notify";
import Web3 from "web3";

import {
  DAPP_ID,
  getCustomTokenContract,
  parseAmount,
  sendTokenTransaction,
} from "utils";
import { IERC20Token } from "utils/interfaces";
import { TokenActionButton } from "components";

import useStyles from "./styles";

type sendTransactionProps = {
  contract: any;
  addressFrom: string;
  targetAddress: string;
  amount: string;
  method: "approve" | "transfer";
};
type TokenButtonsProps = {
  addressFrom?: string;
  balanceInWei?: string;
  selectedToken: IERC20Token;
  targetAddress?: string;
  transferAmount: string;
};

const notify = Notify({
  dappId: DAPP_ID,
  darkMode: true,
  networkId: 4,
  onerror: (error) => {
    console.log("Error on transaction: ", error);
  },
});

const provider = window.ethereum;
const web3 = new Web3(provider);
const gasPrice = web3.eth.getGasPrice;

const sendTransaction =
  ({
    contract,
    addressFrom,
    targetAddress,
    amount,
    method,
  }: sendTransactionProps) =>
  (): Promise<string> =>
    new Promise((resolve, reject) =>
      contract.methods[method](targetAddress, amount)
        .send({ from: addressFrom })
        .on("transactionHash", resolve)
        .catch(reject)
    );

const TokenButtons = ({
  addressFrom,
  balanceInWei,
  selectedToken,
  targetAddress,
  transferAmount,
}: TokenButtonsProps) => {
  const classes = useStyles();
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

  const baseSendTransactionConfig = {
    contract: tokenContract,
    addressFrom: addressFrom as string,
    targetAddress: selectedToken.address,
    amount: transferAmountInWei,
  };
  const baseTxConfig = {
    balance: balanceInWei as string,
    gasPrice,
  };
  const txConfigApprove = {
    ...baseTxConfig,
    sendTransaction: sendTransaction({
      ...baseSendTransactionConfig,
      method: "approve",
    }),
    txDetails: txDetailsApprove,
  };
  const txConfigTransfer = {
    ...baseTxConfig,
    sendTransaction: sendTransaction({
      ...baseSendTransactionConfig,
      method: "transfer",
    }),
    txDetails: txDetailsTransfer,
  };

  const handleApproveClick = () =>
    sendTokenTransaction({
      emitterLoading: setIsTransactionLoading,
      notify,
      txConfig: txConfigApprove,
    });

  const handleTransferClick = () =>
    sendTokenTransaction({
      emitterLoading: setIsTransactionLoading,
      notify,
      txConfig: txConfigTransfer,
    });

  return (
    <Grid className={classes.root} container>
      <Grid item md={5} xs={12}>
        <TokenActionButton
          isTransactionLoading={isTransactionLoading}
          onClick={handleApproveClick}
        >
          Approve Token
        </TokenActionButton>
      </Grid>
      <Grid item md={5} xs={12}>
        <TokenActionButton
          isTransactionLoading={isTransactionLoading}
          onClick={handleTransferClick}
        >
          Transfer Token
        </TokenActionButton>
      </Grid>
    </Grid>
  );
};

export default TokenButtons;
