/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i = 0;
    while(i<nums.length){
        if (!nums.includes(i)) return i;
        i++; 
    }
    return i;
};