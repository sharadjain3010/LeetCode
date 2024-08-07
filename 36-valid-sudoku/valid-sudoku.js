/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // let seen = {};
    // for(let i=0; i<9; i++){
    //     for(let j=0; j<9; j++){
    //         let val = board[i][j];
    //         if(val !== '.'){
    //             if( seen[`${val}_is_seen_at_row_${i}`] ||
    //             seen[`${val}_is_seen_at_column_${j}`] ||
    //             seen[`${val}_is_seen_at_box_${Math.floor(i/3)}_${Math.floor(j/3)}`]){
    //                 return false
    //             }
    //             seen[`${val}_is_seen_at_row_${i}`] = true;
    //             seen[`${val}_is_seen_at_column_${j}`] = true;
    //             seen[`${val}_is_seen_at_box_${Math.floor(i/3)}_${Math.floor(j/3)}`] = true;
    //         }
    //     }
    // }
    // return true;






    let seen = {};
    for(let i=0; i<9; i++){
        for(let j=0; j<9; j++){
            let value = board[i][j];
            if(value !== '.'){
                if((seen[`${value}_seen_at_row_${i}`] ||
                seen[`${value}_seen_at_column_${j}`] ||
                seen[`${value}_seen_at_box_${Math.floor(i/3)}_${Math.floor(j/3)}`])){
                    return false;
                }
                seen[`${value}_seen_at_row_${i}`] = true;
                seen[`${value}_seen_at_column_${j}`] = true;
                seen[`${value}_seen_at_box_${Math.floor(i/3)}_${Math.floor(j/3)}`] = true;
            }
        }
    }
    return true;
};