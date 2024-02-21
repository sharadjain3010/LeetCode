/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = 0;
    let tempSum = 0;
    for(let i=0; i<nums.length; i++){
        tempSum = tempSum + nums[i];
        if(max < tempSum){
            max = tempSum;
        }
        if(tempSum < 0){
            tempSum = 0;
        }
    }
    return max === 0 ? Math.max(...nums) : max;
};