/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    if(nums.length === 0) return null;
    const maxNum =  Math.max.apply(null,nums);
    const maxNumIndex = nums.indexOf(maxNum);
    const left = constructMaximumBinaryTree(nums.slice(0,maxNumIndex));
    const right = constructMaximumBinaryTree(nums.slice(maxNumIndex+1));
    const root = new TreeNode(maxNum, left, right);
    return root; 
};
