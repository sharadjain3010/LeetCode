/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let computedValue = {};
    if(n==0){
        return 0;
    }

    if(n === 1){
        return 1;
    }
    if(computedValue[n]){
        return computedValue[n];
    }else{
        computedValue[n] = fib(n-1) + fib(n-2)
        return computedValue[n];
    }

};