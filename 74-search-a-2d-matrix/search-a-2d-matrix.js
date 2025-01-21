/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0;
    let j = matrix.length - 1;

    while(i<=j){
        const m = Math.floor((i+j)/2);
        if(target >= matrix[m][0] && target <= matrix[m][matrix[m].length-1]){
            let isFound = false;
            for(let i=0; i<matrix[m].length; i++){
                if(matrix[m][i] === target){
                    isFound = true;
                }
            }
            return isFound;
        }else if(target < matrix[m][0]){
            j = m-1;
        }else if(target > matrix[m][matrix[m].length-1]){
            i = m+1;
        }
    }

    return false;
};