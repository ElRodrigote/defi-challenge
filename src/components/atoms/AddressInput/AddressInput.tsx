import React from "react";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { InputCheckerAdornment } from "components";
import { RootState } from "redux/types";
import { setTargetWallet } from "redux/reducers/wallets";
import { validateAddress } from "utils";

import useStyles from "./styles";

const AddressInput = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const targetAddress = useSelector(
    ({ wallets }: RootState) => wallets.targetWallet
  );

  const isValidAddress = validateAddress(targetAddress);
  const isNonEmptyInvalidInput = targetAddress.length && !isValidAddress;

  const handleAddressChange = (event: any) =>
    dispatch(setTargetWallet(event.target.value));

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
