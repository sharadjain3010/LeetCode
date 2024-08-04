/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let profit = 0;
    // let buyIndex = 0;
    // let sellIndex = 1;
    // while(sellIndex < prices.length){
    //     if(prices[buyIndex] < prices[sellIndex]){
    //         profit += prices[sellIndex] - prices[buyIndex];
    //         buyIndex++;
    //         sellIndex++;
    //     }else{
    //         buyIndex = sellIndex;
    //         sellIndex++;
    //     }
    // }
    // return profit;
    let profit = 0;
    let buyIndex = 0;

    for(let i=1; i<prices.length; i++){
        let profitCal = prices[i] - prices[buyIndex]; 
        if(profitCal > 0){
            profit = profit + profitCal;
        }
        buyIndex = i;
    }
    return profit;




















};
