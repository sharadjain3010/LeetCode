/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
function myPow(x, n) {
  if(n === 0){
    return 1;
  }

  if(n < 0){
    return 1/myPow(x, -n); 
  }

  if(n%2 === 0){
    const halfCal = myPow(x, (n/2));
    return halfCal*halfCal;
  }else{
    return x * myPow(x, n-1);
  }
}