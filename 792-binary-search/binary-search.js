/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i=0;
    let j=nums.length-1;

    while(i<=j){
        const m = Math.floor((i+j)/2);
        if(target === nums[m]){
            return m;
        }else if(target > nums[m]){
            i = i+1;
        }else if(target < nums[m]){
            j = j-1;
        }
    }

    return -1;
};