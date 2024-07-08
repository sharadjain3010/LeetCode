/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    const seenArr = [];
    // for(let i=1; seenArr.length<k; i++){
    //     if(!arr.includes(i)){
    //         seenArr.push(i);
    //     }
    // }
    let i =1;
    let arrIndex = 0;
    while(seenArr.length<k){
        if(arr[arrIndex] === i){
            i++;
            arrIndex++;
        }else{
            seenArr.push(i);
            i++;
        }
    }
    return seenArr[seenArr.length-1];
};
