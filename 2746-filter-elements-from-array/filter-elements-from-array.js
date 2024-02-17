/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let newArr = [];
    arr.forEach((el, i)=>{
        if(fn(el, i)) {newArr.push(el);} 
    });
    return newArr;
};