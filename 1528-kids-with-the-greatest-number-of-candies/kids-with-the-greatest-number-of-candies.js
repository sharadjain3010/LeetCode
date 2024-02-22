/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let kidHasMaxCandies = Math.max(...candies);
    let result = [];
    for(let i=0; i<candies.length; i++){
        result.push(!(candies[i]+extraCandies < kidHasMaxCandies))
    }
    return result;
};