/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let res = nums[0];
    for(let i=1; i<nums.length; i++){
        if(Math.abs(nums[i]) <= Math.abs(res)){
            Math.abs(nums[i]) === Math.abs(res) ? res = Math.max(res, nums[i]) : res = nums[i];
        } 
    }  
    return res;
};