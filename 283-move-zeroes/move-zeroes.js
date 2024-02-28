/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    let j = 1;
    while(j<nums.length){
        if(nums[i] === 0){
            if(nums[i] !== nums[j]){
                    const temp = nums[i];
                    nums[i] = nums[j];
                    nums[j] = temp;
                    i++
                    j++;
            }else{
                j++;
            }
        }else{
            i++; 
            j++;
        }
    }
};