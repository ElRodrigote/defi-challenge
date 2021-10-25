import React from "react";

import { TextField } from "@mui/material";

import { IERC20Token } from "utils/interfaces";
import { InputCheckerAdornment } from "components";
import { parseAmount, validateTransferAmount } from "utils";

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
  const isValidAmount = validateTransferAmount(balance, transferAmount);
  const isNonEmptyInvalidInput =
    Boolean(transferAmount.length) && !isValidAmount;

  const handleTransferAmountChange = (event: any) =>
    onChange(event.target.value);

  return (
    <TextField
      className={classes.root}
      error={transferAmount ? !isValidAmount : undefined}
      fullWidth
      helperText={isNonEmptyInvalidInput ? "Invalid amount" : undefined}
      InputProps={{
        startAdornment: (
          <InputCheckerAdornment
            isEmpty={!Boolean(transferAmount.length)}
            isValid={isValidAmount}
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
