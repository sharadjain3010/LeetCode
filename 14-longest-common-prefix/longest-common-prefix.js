/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let res = '';
    for(let i =0; i<strs[0].length; i++){
        for(let j=0; j<strs.length; j++){
           if(strs[j][i] !== strs[0][i]) return res;
        } 
        res = `${res}${strs[0][i]}`;  
    }
    return res;
};