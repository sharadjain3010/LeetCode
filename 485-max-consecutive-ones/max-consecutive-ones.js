/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let maxCount = 0;
    let count = 0;
    for(let i=0; i<nums.length; i++){
        nums[i] ? count++ : count = 0;
        maxCount = Math.max(count, maxCount);
    }
    return maxCount;
};