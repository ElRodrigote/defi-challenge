import React from "react";
import { Grid } from "@mui/material";

import {
  AddressInput,
  TokenAndBalance,
  TokenButtons,
  TransferAmountInput,
} from "components";

import useStyles from "./styles";

const ERC20TransferBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.inputContainer} container>
        <Grid className={classes.balanceAndAmount} container item>
          <Grid item md={6} xs={12}>
            <TokenAndBalance />
          </Grid>
          <Grid item md={5} xs={12}>
            <TransferAmountInput />
          </Grid>
        </Grid>
        <AddressInput />
      </Grid>
      <TokenButtons />
    </div>
  );
};

export default ERC20TransferBox;
