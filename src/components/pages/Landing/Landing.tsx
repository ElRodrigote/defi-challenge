import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

import { ConnectWalletButton, ERC20TransferBox } from "components";

import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  const [account, setAccount] = useState("");

  const provider = window.ethereum;

  useEffect(() => {
    const setUserAccount = async () => {
      const accounts = Boolean(provider) ? await provider.enable() : "";
      const userAccount = accounts[0];

      setAccount(userAccount);
    };

    setUserAccount();
  }, [provider]);

  return (
    <div className={classes.root}>
      {account ? (
        <Typography variant="h5">Wallet Connected!</Typography>
      ) : (
        <ConnectWalletButton />
      )}
      <ERC20TransferBox account={account} />
    </div>
  );
};

export default Landing;
