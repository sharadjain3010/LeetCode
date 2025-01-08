/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let isPower = false;

    const powerOfTwoFun = (num)=>{
        if(num === 1){
            isPower = true;
            return;
        }

        if(num%1 !== 0 || num === 0){
            isPower = false;
            return
        }

        powerOfTwoFun(num/2);
    }

    powerOfTwoFun(n);

    return isPower;
};