/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj = {};
    let res = false;

    for(let i=0; i<nums.length; i++){
        obj[nums[i]] ? res = true : obj[nums[i]] = true
    }
    return res;
};