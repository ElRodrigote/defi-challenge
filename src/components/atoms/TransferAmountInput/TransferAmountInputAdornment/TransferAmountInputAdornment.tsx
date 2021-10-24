import React from "react";

import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

type TransferAmountInputAdornmentProps = {
  isEmptyAmount: boolean;
  isInvalidAmount: boolean;
};

const TransferAmountInputAdornment = ({
  isEmptyAmount,
  isInvalidAmount,
}: TransferAmountInputAdornmentProps) =>
  isEmptyAmount ? null : (
    <InputAdornment position="start">
      {isInvalidAmount ? <CheckCircle /> : <ErrorOutline />}
    </InputAdornment>
  );

export default TransferAmountInputAdornment;
