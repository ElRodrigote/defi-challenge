import React from "react";
import Button from "@mui/material/Button";
import Onboard from "bnc-onboard";

import { DAPP_ID } from "utils";

const onboard = Onboard({
  dappId: DAPP_ID,
  networkId: 4,
});

const connectWallet = async () => {
  await onboard.walletSelect();
  await onboard.walletCheck();
};

const ConnectWalletButton = () => (
  <div>
    <Button onClick={connectWallet} variant="contained">
      Connect Wallet
    </Button>
  </div>
);

export default ConnectWalletButton;
