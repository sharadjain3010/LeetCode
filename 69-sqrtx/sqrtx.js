/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(target) {
    let result;
    let i = 0;
    let j = target;
    while(i<=j){
        const median = Math.floor((i+j)/2);
        const val = median*median;
        if(target === val){
            return median;
        }else if(target < val){
            j = median - 1;
        }else if(target > val){
            i = median + 1;
            result = median;
        }
    }

    return result;
};