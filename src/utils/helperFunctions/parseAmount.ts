import BigNumber from "bignumber.js";

import { validateBigNumber } from "utils";

const DECIMAL_PLACES = 4;
const WEI_PLACES = 0;
const ROUNDING_MODE = BigNumber.ROUND_DOWN;

/**
 * We use this fn to parse numbers back and forth
 * big numbers and decimal numbers.
 * We define decimals up to 4 spaces, big number values
 * always as integers, and we use these results to
 * display the balance value in human readable way or
 * to operate with token transfers.
 * Once again, I choose `toWei` instead `toBigNumber`
 * for simplicity sake account, sowe get a big number
 * parsed into string.
 * `BNO` stands for Big Number Object.
 */
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
