/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(base, exponent) {
  if (exponent === 0) {
    return 1;
  }

  if (exponent < 0) {
    return 1 / myPow(base, -exponent);
  }

  if (exponent % 2 === 0) {
    const halfPower = myPow(base, exponent / 2);
    return halfPower * halfPower;
  } else {
    return base * myPow(base, exponent - 1);
  }
}