import BigNumber from "bignumber.js";

import { validateBigNumber } from "utils";

const DECIMAL_PLACES = 4;
const WEI_PLACES = 0;
const ROUNDING_MODE = BigNumber.ROUND_DOWN;

const parseBigNumber = (
  BNAmount: any,
  BNOMultiplier: any,
  parseTo: "toWei" | "toDecimal"
) => {
  const isParseToWei = parseTo === "toWei";
  const numberPlaces = isParseToWei ? WEI_PLACES : DECIMAL_PLACES;
  const BNOAmount = new BigNumber(BNAmount);
  const parsedResult = isParseToWei
    ? BNOAmount.multipliedBy(BNOMultiplier)
    : BNOAmount.div(BNOMultiplier);

  return parsedResult.toFixed(numberPlaces, ROUNDING_MODE);
};

const parseAmount = (
  amount: string,
  tokenDecimals: number,
  parseTo: "toWei" | "toDecimal"
) => {
  const BNOAmount = new BigNumber(amount);
  const isInvalidBigNumber = validateBigNumber(BNOAmount);

  if (isInvalidBigNumber) return "0";

  const BNOTokenDecimals = new BigNumber(tokenDecimals);
  const BNOMultiplier = new BigNumber("10").pow(BNOTokenDecimals);
  const parsedAmount = parseBigNumber(BNOAmount, BNOMultiplier, parseTo);

  return parsedAmount;
};

export default parseAmount;
