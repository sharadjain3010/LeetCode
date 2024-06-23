/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    const map = {};
    const duplicateArr = [];
    for(let i=0; i<nums.length; i++){
        if(map[nums[i]]){
            duplicateArr.push(nums[i]);
        }else{
            map[nums[i]] = true;
        }
    }
    return duplicateArr;
};