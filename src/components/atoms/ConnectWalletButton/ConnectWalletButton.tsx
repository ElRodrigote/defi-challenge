import React from "react";
import Button from "@mui/material/Button";
import Onboard from "bnc-onboard";

import { DAPP_ID } from "utils";

const onboard = Onboard({
  dappId: DAPP_ID,
  networkId: 4,
});

const connectWallet = async () => {
  try {
    await onboard.walletSelect();
    await onboard.walletCheck();
  } catch (error) {
    console.log("Error trying to connect wallet: ", error);
  }
};

const ConnectWalletButton = () => (
  <div>
    <Button fullWidth onClick={connectWallet} size="large" variant="contained">
      Connect Wallet
    </Button>
  </div>
);

export default ConnectWalletButton;
