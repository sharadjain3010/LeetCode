/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let seen = {};
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let val = board[i][j];
            if(val !== '.'){
                if( seen[`${val}_is_seen_at_row_${i}`] ||
                seen[`${val}_is_seen_at_column_${j}`] ||
                seen[`${val}_is_seen_at_box_${Math.ceil((i+1)/3)}_${Math.ceil((j+1)/3)}`]){
                    return false
                }
                seen[`${val}_is_seen_at_row_${i}`] = true;
                seen[`${val}_is_seen_at_column_${j}`] = true;
                seen[`${val}_is_seen_at_box_${Math.ceil((i+1)/3)}_${Math.ceil((j+1)/3)}`] = true;
            }
        }
    }
    return true;
};