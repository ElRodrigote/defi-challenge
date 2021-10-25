import React from "react";

import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

type InputCheckerAdornmentProps = {
  isEmpty: boolean;
  isValid: boolean;
};

const InputCheckerAdornment = ({
  isEmpty,
  isValid,
}: InputCheckerAdornmentProps) =>
  isEmpty ? null : (
    <InputAdornment position="start">
      {isValid ? <CheckCircle /> : <ErrorOutline />}
    </InputAdornment>
  );

export default InputCheckerAdornment;
