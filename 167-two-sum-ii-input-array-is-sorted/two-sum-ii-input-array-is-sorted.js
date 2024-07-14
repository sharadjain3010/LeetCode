/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let fP = 0;
    let lP = numbers.length-1

    while(fP<lP){
        if(numbers[fP] + numbers[lP]>target){
            lP--;
        }else if(numbers[fP] + numbers[lP]<target){
            fP++;
        }else{
            break;
        }
    }

    return [fP+1, lP+1];
};