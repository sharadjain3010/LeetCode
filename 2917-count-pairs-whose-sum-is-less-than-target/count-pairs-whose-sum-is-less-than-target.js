/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countPairs = function(nums, target) {
    nums.sort((a, b) => a-b); // sort the vector nums
    let count = 0; // variable to store the count
    let left = 0; // variable to store the left
    let right = nums.length-1; // variable to store the right
    while(left < right){ // loop until left is less than right
        if(nums[left] + nums[right] < target){ // if nums[left] + nums[right] is less than target
            count += right-left; // update the count
            left++; // increment the left
        }
        else{ // else
            right--; // decrement the right
        }
    }
    return count; // return the count
};
