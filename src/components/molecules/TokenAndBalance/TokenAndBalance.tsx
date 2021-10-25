import React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { parseAmount, tokensRinkeby } from "utils";
import { IERC20Token } from "utils/interfaces";

import { useMediaQuery, useTheme } from "@mui/material";

import useStyles from "./styles";

type TokenAndBalanceProps = {
  account?: string;
  balanceInWei?: string;
  isBalanceLoading?: boolean;
  onChange: (value: number) => void;
  selectedToken: IERC20Token;
};

const TokenAndBalance = ({
  account,
  balanceInWei,
  isBalanceLoading,
  onChange,
  selectedToken,
}: TokenAndBalanceProps) => {
  const classes = useStyles();
  const theme = useTheme();
  const isSmViewport = useMediaQuery(theme.breakpoints.down("sm"));
  const balance = parseAmount(
    balanceInWei as string,
    selectedToken.decimals,
    "toDecimal"
  );
  const balanceText =
    account && !isBalanceLoading
      ? `Balance: ${balance} ${selectedToken.symbol}`
      : "Loading Balance...";

  const getAddressText = () => {
    const address = selectedToken.address;
    if (!isSmViewport) return `Token Address: ${address}`;

    const firstSixFromAddress = address.substring(0, 6);
    const lastFourFromAddress = address.substr(-4);
    const minifiedAddress = `${firstSixFromAddress}...${lastFourFromAddress}`;

    return minifiedAddress;
  };

  return (
    <FormControl className={classes.root}>
      <InputLabel id="token-dropdown">Token Name</InputLabel>
      <Select
        defaultValue={0}
        fullWidth
        id="token-dropdown"
        label="Token Name"
        onChange={(event) => onChange(event.target.value as number)}
      >
        {tokensRinkeby.map((token, index) => (
          <MenuItem value={index} key={token.address}>
            {token.name}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{balanceText}</FormHelperText>
      <FormHelperText>{getAddressText()}</FormHelperText>
    </FormControl>
  );
};

export default TokenAndBalance;
