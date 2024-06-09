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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    if(root == null) return null;

    let ans;
    let count = 0;

    const traverseBinaryTree = (root)=>{
        root.left && traverseBinaryTree(root.left);
        count++;
        if(count === k){
            ans = root.val;
        }
        root.right && traverseBinaryTree(root.right);
    } 
    traverseBinaryTree(root);
    return ans;
};