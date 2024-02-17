/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    let newArr = []
    if(n === 0){
        return arr;
    }
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>=0){
             newArr.push(...flat(arr[i], n-1));
        }else{
            newArr.push(arr[i])
        }
    }
    return newArr;
};