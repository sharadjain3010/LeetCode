/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    let newIntervals = [];
    let sortedIntervals = intervals.sort((a,b)=>{return a[0] - b[0]}); 
    let currentInterval = sortedIntervals[0];
    for(let i=1; i<sortedIntervals.length; i++){
        // if(currentInterval[0] > sortedIntervals[i][0]){
        //     currentInterval[0] = sortedIntervals[i][0];
        // }
        if(currentInterval[1] >= sortedIntervals[i][0] &&
            currentInterval[1] < sortedIntervals[i][1]){
            currentInterval[1] = sortedIntervals[i][1];
        }
        if(currentInterval[1] < sortedIntervals[i][0]){
            newIntervals.push(currentInterval);
            currentInterval = sortedIntervals[i];
        }
    
    }
    newIntervals.push(currentInterval);

    return newIntervals;
};