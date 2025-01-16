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
 * @return {number}
 */
var countNodes = function(root) {
    let count = 0
    if(!root) return count;

    let traverseTree = (root)=>{
        if(!root) return;
        count++;
        root.left && traverseTree(root.left)
        root.right && traverseTree(root.right)
    }

    traverseTree(root);

    return count;
};