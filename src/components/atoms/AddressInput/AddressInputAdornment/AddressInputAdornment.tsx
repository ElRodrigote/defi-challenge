import React from "react";

import { CheckCircle, ErrorOutline } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";

type AddressInputAdornmentProps = {
  isEmptyAddress: boolean;
  isValidAddress: boolean;
};

const AddressInputAdornment = ({
  isEmptyAddress,
  isValidAddress,
}: AddressInputAdornmentProps) =>
  isEmptyAddress ? null : (
    <InputAdornment position="start">
      {isValidAddress ? <CheckCircle /> : <ErrorOutline />}
    </InputAdornment>
  );

export default AddressInputAdornment;
