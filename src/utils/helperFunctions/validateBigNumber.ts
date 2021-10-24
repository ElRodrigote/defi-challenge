const validateBigNumber = (bigNumber: any) =>
  bigNumber.isNegative() || bigNumber.isZero() || bigNumber.isNaN();

export default validateBigNumber;
