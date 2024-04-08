/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let mapObj = {
         ')' : '(',
        '}':'{',
        ']':'['
    };
    const closingBrackets = [')','}',']'];

    for(let i=0; i<s.length; i++){
        if(closingBrackets.includes(s[i])){
            const val = stack.pop();
            if(val !== mapObj[s[i]]) return false;
        }else{
            stack.push(s[i]);
        }
    }
    if(stack.length > 0){
        return false;
    }
    return true;
};