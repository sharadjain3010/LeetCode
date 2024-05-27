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
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    if (root === null) return [];
    const arr = [];
    const helper = (root, currentSum = 0, sumArr=[])=>{
       const tempSum = currentSum + root.val;
        const tempSumArr = [...sumArr,root.val];

        if(root.left === null && root.right === null){
            if(tempSum === targetSum) {
                arr.push(tempSumArr);
            }
        }

        root.left && helper(root.left, tempSum, tempSumArr);
        root.right && helper(root.right, tempSum, tempSumArr);
    }
    helper(root)
    return arr;

}