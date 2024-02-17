/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let i=0;
    let j=0;
    let mergedArr = [];
    arr1 = arr1.sort((a,b)=>a.id - b.id);
    arr2 = arr2.sort((a,b)=>a.id - b.id);
    while(i<arr1.length || j<arr2.length){
        if(i<arr1.length && j<arr2.length){
            if(arr1[i].id < arr2[j].id){
                mergedArr.push(arr1[i++]);
            }else if(arr1[i].id > arr2[j].id){
                mergedArr.push(arr2[j++]);
            }else{
                mergedArr.push({...arr1[i++], ...arr2[j++]});
            }
        }else if(i<arr1.length){
            mergedArr.push(...arr1.slice(i));
            i = arr1.length;
        }else{
            mergedArr.push(...arr2.slice(j));
            j = arr2.length;
        }
    }
    return mergedArr;
};