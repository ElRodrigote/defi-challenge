import BigNumber from "bignumber.js";
import Web3 from "web3";
import { AbiItem } from "web3-utils";

const DECIMAL_PLACES = 4;
const WEI_PLACES = 0;
const ROUNDING_MODE = BigNumber.ROUND_DOWN;

const provider = window.ethereum;
const web3 = new Web3(provider);

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

export const getCustomTokenContract = (abi: any, address: string) =>
  Boolean(web3) ? new web3.eth.Contract(abi as AbiItem[], address) : null;

export const parseAmount = (
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

export const validateAddress = (address: string) =>
  web3.utils.isAddress(address);

export const validateBigNumber = (bigNumber: any) =>
  bigNumber.isNegative() || bigNumber.isZero() || bigNumber.isNaN();

export const validateTransferAmount = (
  balance: string,
  transferAmount: string
) => {
  const currentBalance = new BigNumber(balance);
  const currentAmount = new BigNumber(transferAmount);
  const isInvalidBigNumber = validateBigNumber(currentAmount);

  if (isInvalidBigNumber) return false;

  return currentBalance.isGreaterThanOrEqualTo(currentAmount);
};
