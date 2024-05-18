/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if(word1.length !== word2.length){
        return false;
    }

    let word1Map = {};
    let word2Map = {};

    for(let i=0; i<word1.length; i++){
        word1Map[word1[i]] ? word1Map[word1[i]] += 1 : word1Map[word1[i]] = 1; 
        word2Map[word2[i]] ? word2Map[word2[i]] += 1 : word2Map[word2[i]] = 1; 
    }

    return ((Object.keys(word1Map).sort().join('') === Object.keys(word2Map).sort().join(''))&&(Object.values(word1Map).sort((a,b)=>a-b).join('') === Object.values(word2Map).sort((a,b)=>a-b).join('')))

};