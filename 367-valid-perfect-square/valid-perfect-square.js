/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let i=0;
    let j=num;
    while(i<=j){    
        const m = Math.floor((i+j)/2);
        const square = m*m;
        if(num === square){
            return true
        }else if(num < square){
            j = m -1;
        }else if(num > square){
            i = m + 1;
        }
    }
    return false;
};