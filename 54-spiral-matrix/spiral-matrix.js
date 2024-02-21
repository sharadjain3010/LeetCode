/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const di = [[0,1],[1,0],[0,-1],[-1,0]];
    let visitedIndex = [];
    let cd = 0;
    let result = [];
    let xIndex = 0;
    let yIndex = 0;
    let i = 0
    while(i < matrix[0].length * matrix.length){
        result.push(matrix[xIndex][yIndex]);
        visitedIndex.push(`${xIndex}${yIndex}`)
        if((matrix[xIndex + di[cd][0]]?.[yIndex + di[cd][1]] === undefined) || 
        visitedIndex.includes(`${xIndex + di[cd][0]}${yIndex + di[cd][1]}`)){
            if(cd===3){
                cd = 0;
            }else{
                cd++;
            }
        }
        xIndex = xIndex + di[cd][0];
        yIndex = yIndex + di[cd][1];
        i++;
    }
    return result;
};