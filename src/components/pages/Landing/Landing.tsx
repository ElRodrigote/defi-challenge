import React, { useEffect } from "react";
import { Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { ConnectWalletButton, ERC20TransferBox } from "components";
import { RootState } from "redux/types";
import { setSpenderWallet } from "redux/reducers/wallets";
import { useBalance } from "hooks";

import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const spenderWallet = useSelector(
    ({ wallets }: RootState) => wallets.spenderWallet
  );

  const provider = window.ethereum;

  useBalance();

  useEffect(() => {
    const setUserAccount = async () => {
      const accounts = Boolean(provider) ? await provider.enable() : "";
      const userAccount = accounts[0];

      dispatch(setSpenderWallet(userAccount));
    };

    setUserAccount();
  }, [dispatch, provider]);

  return (
    <div className={classes.root}>
      {spenderWallet ? (
        <Typography className={classes.connectedText} variant="h5">
          Wallet Connected!
        </Typography>
      ) : (
        <ConnectWalletButton />
      )}
      <ERC20TransferBox />
    </div>
  );
};

export default Landing;
