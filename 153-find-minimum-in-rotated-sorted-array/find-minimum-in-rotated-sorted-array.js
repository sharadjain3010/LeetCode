/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let minEle = Math.min();

    let i=0;
    let j=nums.length-1;

    while(i<=j){
        const m = Math.floor((i+j)/2);
        console.log(nums[m], minEle);
        minEle = Math.min(nums[m], minEle);
        if(nums[i] < nums[j]){
            console.log('inside i<j', nums[i], nums[j]);
            return Math.min(nums[i], minEle);
        }
        if(nums[i] <= nums[m]){
            i = m+1;
        }else{
            j = m-1;
        }

    }

    return minEle;
};