/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
   let sum = nums.reduce((acc, cur)=>{
    return acc+cur;
   },0);
   return (nums.length*(nums.length+1))/2 - sum;

};