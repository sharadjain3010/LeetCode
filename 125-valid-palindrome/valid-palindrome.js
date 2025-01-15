/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const updatedStr = s.replace(/[^a-z0-9]/gmi,'').toLowerCase();

    if(updatedStr.length <= 1){
        return true;
    }

    let isPalindrome = true;
    let i = 0;
    let j = updatedStr.length-1; 
    while(i<j){
        if(updatedStr[i] !== updatedStr[j]){
            isPalindrome = false;
            break;
        }
        i++;
        j--;
    }
    return isPalindrome;
};