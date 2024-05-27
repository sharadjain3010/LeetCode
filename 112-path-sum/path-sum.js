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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function(root, targetSum) {
    if(root === null) return 0;
    let isMatched = false;
    const helper = (root, currentSum=0)=>{
        if(isMatched) return;
        const tempSum = currentSum + root.val;

        if(root.left === null && root.right === null){
            isMatched = (tempSum === targetSum);
        }

        root.left && helper(root.left, tempSum);
        root.right && helper(root.right, tempSum);
    }
    helper(root);
    return isMatched;
};