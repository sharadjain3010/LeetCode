/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalTraversal = function(root) {
    if(root === null) return [];
    const obj = {};
    const traverse = (root, col, row)=>{
        if(root === null) return []
        if(obj[col]){
            obj[col].push([row, root.val]);
        }else{
            obj[col] = [[row, root.val]];
        }
       
        traverse(root.left, col - 1, row+1 );
        traverse(root.right, col + 1, row+1);

    }
    traverse(root, 0, 0);
    console.log(obj);
    
    return Object.keys(obj).sort((a,b)=>a-b).map((el)=>obj[el].sort((a,b)=>{
        if(a[0] !== b[0]) return a[0]-b[0];
        if(a[1] !== b[1]) return a[1]-b[1];
    }).map((el)=>el[1]));

};