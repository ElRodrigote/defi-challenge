import React from "react";

import { TextField } from "@mui/material";

import { parseAmount, validateTransferAmount } from "utils";
import { IERC20Token } from "utils/interfaces";

import TransferAmountInputAdornment from "./TransferAmountInputAdornment";
import useStyles from "./styles";

type TransferAmountInputProps = {
  balanceInWei?: string;
  onChange: (value: string) => void;
  selectedToken: IERC20Token;
  transferAmount: string;
};

const TransferAmountInput = ({
  balanceInWei,
  onChange,
  selectedToken,
  transferAmount,
}: TransferAmountInputProps) => {
  const classes = useStyles();
  const balance = parseAmount(
    balanceInWei as string,
    selectedToken.decimals,
    "toDecimal"
  );
  const isInvalidAmount = validateTransferAmount(balance, transferAmount);
  const isNonEmptyInvalidInput =
    Boolean(transferAmount.length) && !isInvalidAmount;

  const handleTransferAmountChange = (event: any) =>
    onChange(event.target.value);

  return (
    <TextField
      className={classes.root}
      error={transferAmount ? !isInvalidAmount : undefined}
      fullWidth
      helperText={isNonEmptyInvalidInput ? "Invalid amount" : undefined}
      InputProps={{
        startAdornment: (
          <TransferAmountInputAdornment
            isEmptyAmount={!Boolean(transferAmount.length)}
            isInvalidAmount={isInvalidAmount}
          />
        ),
      }}
      label="Amount to Transfer"
      onChange={handleTransferAmountChange}
      value={transferAmount}
    />
  );
};

export default TransferAmountInput;
