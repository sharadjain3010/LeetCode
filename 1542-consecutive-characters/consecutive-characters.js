/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let max = 0;
    let charsWithCount = {};
    let lastChar;
    for(let i=0; i<s.length; i++){
        if(charsWithCount[s[i]] && lastChar === s[i]){
            charsWithCount[s[i]] = charsWithCount[s[i]] + 1;
        }else{
            charsWithCount[s[i]] = 1;
        }
        lastChar = s[i]
        max = Math.max(max, charsWithCount[s[i]]);
    }
    return max;
};