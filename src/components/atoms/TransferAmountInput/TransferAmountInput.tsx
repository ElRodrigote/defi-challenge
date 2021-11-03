import React from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { InputCheckerAdornment } from "components";
import { parseAmount, validateTransferAmount } from "utils";
import { RootState } from "redux/types";
import { setAmountToTransfer } from "redux/reducers/balance";

import useStyles from "./styles";

const TransferAmountInput = () => {
  const classes = useStyles();
  const balanceInWei = useSelector(
    ({ balance }: RootState) => balance.selectedTokenBalance
  );
  const dispatch = useDispatch();
  const selectedToken = useSelector(
    ({ tokens }: RootState) => tokens.selectedToken
  );
  const transferAmount = useSelector(
    ({ balance }: RootState) => balance.amountToTransfer
  );

  const balance = parseAmount(
    balanceInWei as string,
    selectedToken.decimals,
    "toDecimal"
  );
  const isValidAmount = validateTransferAmount(balance, transferAmount);
  const isNonEmptyInvalidInput =
    Boolean(transferAmount.length) && !isValidAmount;

  const handleTransferAmountChange = (amount: string) =>
    dispatch(setAmountToTransfer(amount));

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
      onChange={(event: any) =>
        handleTransferAmountChange(event.target.value as string)
      }
      value={transferAmount}
    />
  );
};

export default TransferAmountInput;
