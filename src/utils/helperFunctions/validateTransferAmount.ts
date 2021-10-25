import BigNumber from "bignumber.js";

import { validateBigNumber } from "utils";

const validateTransferAmount = (balance: string, transferAmount: string) => {
  const currentBalance = new BigNumber(balance);
  const currentAmount = new BigNumber(transferAmount);
  const isInvalidBigNumber = validateBigNumber(currentAmount);

  if (isInvalidBigNumber) return false;

  return currentBalance.isGreaterThanOrEqualTo(currentAmount);
};

export default validateTransferAmount;
