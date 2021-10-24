import React from "react";

import { TextField } from "@mui/material";
import { validateAddress } from "utils";

import AddressInputAdornment from "./AddressInputAdornment";
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
          <AddressInputAdornment
            isEmptyAddress={!Boolean(targetAddress.length)}
            isValidAddress={isValidAddress}
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
