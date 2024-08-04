/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // let profit = 0;
    // let buyIndex = 0;
    // let sellIndex = 1;
    // while(sellIndex < prices.length){
    //     profit = Math.max(profit, prices[sellIndex]-prices[buyIndex]);
    //     if(prices[sellIndex]-prices[buyIndex] < 0){
    //         buyIndex = sellIndex;
    //         sellIndex++
    //     }else{
    //         sellIndex++
    //     }
    // }
    // return profit > 0 ? profit : 0;


    let profit = 0;
    let buyIndex = 0;

    for(let i=1; i<prices.length; i++){
        const profitCal = prices[i] - prices[buyIndex];
        if(profitCal < 0){
            buyIndex = i;
        }else{
            profit = Math.max(profitCal, profit);
        }
    }
    return profit;
}



