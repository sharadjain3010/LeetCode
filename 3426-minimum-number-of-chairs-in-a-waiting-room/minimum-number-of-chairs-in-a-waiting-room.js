/**
 * @param {string} s
 * @return {number}
 */
var minimumChairs = function(s) {
    let chairsNeeded = 0;
    let currentChair = 0
    for(let i=0; i<s.length; i++){
        s[i]==='E' ? currentChair++ : currentChair--;
        chairsNeeded = Math.max(chairsNeeded, currentChair);
    }
    return chairsNeeded;
};