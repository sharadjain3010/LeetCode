/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    let isFound = false;
    let itemIndex = [];

    while((i <= j) & !isFound){
        let m = Math.floor((i+j)/2);
        let lastIndex;
        if(nums[m] === target){
            isFound = true;
            let first = m;
            let last = m;
            while(true){
                if(nums[first-1] === target){
                    first = first-1;
                }else{
                    break;
                }
            }
            while(true){
                if(nums[last+1] === target){
                    last = last + 1;
                }else{
                    break;
                }
            }
            itemIndex = [first, last];
        }else if(target < nums[m]){
            j = m-1;
        }else if(target > nums[m]){
            i = m+1;
        }
    }


    if(!isFound){
        itemIndex = [-1, -1];
    }

    return itemIndex;
};