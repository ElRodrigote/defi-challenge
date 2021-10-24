import React, { useEffect, useState } from "react";

import { ConnectWalletButton, ERC20TransferBox } from "components";

import useStyles from "./styles";

const Landing = () => {
  const classes = useStyles();
  const [account, setAccount] = useState("");

  const provider = window.ethereum;

  useEffect(() => {
    const setUserAccount = async () => {
      const accounts = await provider.enable();
      const userAccount = accounts[0];

      setAccount(userAccount);
    };

    setUserAccount();
  }, [provider]);

  return (
    <div className={classes.root}>
      {account ? <div>Connected!</div> : <ConnectWalletButton />}
      {/* <ConnectWalletButton /> */}
      <ERC20TransferBox account={account} />
    </div>
  );
};

export default Landing;
