/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = {};
    const res = []
    for(let i=0; i<strs.length; i++){
        const sorted = strs[i].split('').sort().join('');
        hash[sorted] ? hash[sorted].push(strs[i]) : hash[sorted]=[strs[i]];
    }
    
    Object.keys(hash).forEach((el)=>{
        res.push(hash[el])
    });

    return res;
};