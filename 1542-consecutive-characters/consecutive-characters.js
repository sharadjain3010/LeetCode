/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let currentMax = 0;
    let max = 0;
    let currentChar;
    for(let i=0; i<s.length; i++){
        if(currentChar === s[i]){
            currentMax++;
        }else{
            currentChar = s[i];
            currentMax = 1;
        }
        max = Math.max(currentMax, max)
    }

    return max;
};