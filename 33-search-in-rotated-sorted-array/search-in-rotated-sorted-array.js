/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0; 
    let j = nums.length-1;

    if(nums.length === 1){
        if(nums[0] === target) return 0
        return -1;
    }

    while(i<=j){
        const m = Math.floor((i+j)/2);
        if(target === nums[m]){
            return m;
        }
        if(nums[i] <= nums[m]){
            if(target < nums[m] && target >= nums[i]){
                j = m-1;
            }else{
                i = m+1;
            }
        }else{
            if(target > nums[m] && target <= nums[j]){
                i = m+1;
            }else{
                j = m-1;
            }
        }

        // if(nums[i] <= nums[j]){
        //     if(nums[m] === target){
        //         return m;
        //     }else if(target > nums[m]){
        //         i = m+1;
        //     }else if(target < nums[m]){
        //         j = m-1;
        //     }
        // }else{
        //     if(target === nums[m]){
        //         return m; 
        //     }else if((target < nums[m] && nums[m] >= nums[j]) ||
        //     (target > nums[m] && target <= nums[j]) ){
        //         i = m+1;
        //     }else if((target < nums[m] && nums[m] <= nums[j])
        //     || (target > nums[m] && target >= nums[j])){
        //         j = m-1;
        //     }
            
        //  }
        
    }

    return -1; 
};