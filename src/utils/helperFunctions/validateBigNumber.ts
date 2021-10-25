/**
 * This fn validates the BN we try to use is a
 * positive number.
 * @params BigNumber object
 */

const validateBigNumber = (bigNumber: any) =>
  bigNumber.isNegative() || bigNumber.isZero() || bigNumber.isNaN();

export default validateBigNumber;
