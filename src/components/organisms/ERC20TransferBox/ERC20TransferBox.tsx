import React, { useState } from "react";
import { Grid } from "@mui/material";

import {
  AddressInput,
  TokenAndBalance,
  TransferAmountInput,
  TransferButton,
} from "components";
import { tokensRinkeby } from "utils";
import { useBalance } from "hooks";

import useStyles from "./styles";

type ERC20TransferBoxProps = {
  account?: string;
};

const ERC20TransferBox = ({ account }: ERC20TransferBoxProps) => {
  const classes = useStyles();
  const [selectedToken, setSelectedToken] = useState(tokensRinkeby[0]);
  const [targetAddress, setTargetAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("0");
  const [balanceInWei, isBalanceLoading] = useBalance(account, selectedToken);

  const handleTokenChange = (tokenValue: number) =>
    setSelectedToken(tokensRinkeby[tokenValue]);

  const handleTargetAdressChange = (address: string) =>
    setTargetAddress(address);

  const handleTransferAmountChange = (amount: string) =>
    setTransferAmount(amount);

  return (
    <div className={classes.root}>
      <Grid className={classes.inputContainer} container>
        <Grid className={classes.balanceAndAmount} container item>
          <Grid item xs={6}>
            <TokenAndBalance
              account={account}
              balanceInWei={balanceInWei as string}
              isBalanceLoading={isBalanceLoading as boolean}
              onChange={handleTokenChange}
              selectedToken={selectedToken}
            />
          </Grid>
          <Grid item xs={5}>
            <TransferAmountInput
              balanceInWei={balanceInWei as string}
              onChange={handleTransferAmountChange}
              selectedToken={selectedToken}
              transferAmount={transferAmount}
            />
          </Grid>
        </Grid>
        <AddressInput
          onChange={handleTargetAdressChange}
          targetAddress={targetAddress}
        />
      </Grid>
      <TransferButton
        addressFrom={account}
        balanceInWei={balanceInWei as string}
        selectedToken={selectedToken}
        targetAddress={targetAddress}
        transferAmount={transferAmount}
      />
    </div>
  );
};

export default ERC20TransferBox;
