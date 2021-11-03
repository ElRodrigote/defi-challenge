import React from "react";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery, useTheme } from "@mui/material";

import { IERC20Token } from "utils/interfaces";
import { parseAmount } from "utils";
import { RootState } from "redux/types";
import { setSelectedToken } from "redux/reducers/tokens";

import useStyles from "./styles";

const TokenAndBalance = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const balanceInWei = useSelector(
    ({ balance }: RootState) => balance.selectedTokenBalance
  );
  const isBalanceLoading = useSelector(
    ({ balance }: RootState) => balance.isBalanceLoading
  );
  const selectedToken = useSelector(
    ({ tokens }: RootState) => tokens.selectedToken
  );
  const spenderWallet = useSelector(
    ({ wallets }: RootState) => wallets.spenderWallet
  );
  const theme = useTheme();
  const tokensRinkeby = useSelector(({ tokens }: RootState) => tokens.rinkeby);
  const isSmViewport = useMediaQuery(theme.breakpoints.down("sm"));

  const balance = parseAmount(
    balanceInWei as string,
    selectedToken.decimals,
    "toDecimal"
  );
  const balanceText =
    spenderWallet && !isBalanceLoading
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

  const handleTokenChange = (tokenValue: number) =>
    dispatch(setSelectedToken(tokensRinkeby[tokenValue]));

  return (
    <FormControl className={classes.root}>
      <InputLabel id="token-dropdown">Token Name</InputLabel>
      <Select
        defaultValue={0}
        fullWidth
        id="token-dropdown"
        label="Token Name"
        onChange={(event) => handleTokenChange(event.target.value as number)}
      >
        {tokensRinkeby.map((token: IERC20Token, index: number) => (
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
