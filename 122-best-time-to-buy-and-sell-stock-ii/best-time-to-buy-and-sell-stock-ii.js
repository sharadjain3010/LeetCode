/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let buyIndex = 0;
    let sellIndex = 1;
    while(sellIndex < prices.length){
        if(prices[buyIndex] < prices[sellIndex]){
            profit += prices[sellIndex] - prices[buyIndex];
            buyIndex++;
            sellIndex++;
        }else{
            buyIndex = sellIndex;
            sellIndex++;
        }
    }
    return profit;
};