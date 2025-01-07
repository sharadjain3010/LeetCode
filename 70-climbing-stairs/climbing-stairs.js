/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let hash = {};

    const steps = (n)=>{
        if(n === 1 || n === 2){
            return n;
        }
        if(hash[n]){
            return hash[n];
        }else{
            hash[n] = steps(n-1) + steps(n-2);
        }
        return hash[n];
    }
    return steps(n);
};