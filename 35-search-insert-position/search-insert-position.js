/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let targetIndex;
    let expectedIndex;
    let i = 0;
    let j = nums.length - 1;
    if(target <= nums[0]){
        return 0;
    }
    if(target > nums[j]){
        return j + 1;
    } 

    while(i<=j){
        const median = Math.floor((i+j)/2);
        if(nums[median] === target){
            targetIndex = median;
            break;
        }else if(target < nums[median]){
            j = median - 1; 
        }else if(target > nums[median]){
            i = median + 1;
        }
        expectedIndex = j+1; 
    }
    return targetIndex || expectedIndex;
};