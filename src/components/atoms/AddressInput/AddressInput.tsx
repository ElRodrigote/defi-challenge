import React from "react";

import { TextField } from "@mui/material";

import { InputCheckerAdornment } from "components";
import { validateAddress } from "utils";

import useStyles from "./styles";

type AddressInputProps = {
  targetAddress?: string;
  onChange: (value: string) => void;
};

const AddressInput = ({ targetAddress = "", onChange }: AddressInputProps) => {
  const classes = useStyles();

  const isValidAddress = validateAddress(targetAddress);
  const isNonEmptyInvalidInput =
    Boolean(targetAddress.length) && !isValidAddress;

  const handleAddressChange = (event: any) => onChange(event.target.value);

  return (
    <TextField
      className={classes.root}
      error={targetAddress ? !isValidAddress : undefined}
      fullWidth
      helperText={isNonEmptyInvalidInput ? "Invalid address" : undefined}
      InputProps={{
        startAdornment: (
          <InputCheckerAdornment
            isEmpty={!Boolean(targetAddress.length)}
            isValid={isValidAddress}
          />
        ),
      }}
      label="Target Address"
      onChange={handleAddressChange}
      placeholder="0x..."
      value={targetAddress}
    />
  );
};

export default AddressInput;
