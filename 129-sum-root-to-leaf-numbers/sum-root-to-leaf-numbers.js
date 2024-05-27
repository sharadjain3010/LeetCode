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
var sumNumbers = function(root) {
    let sum = 0;
    const helper = (root, rootVal=0)=>{
        const rootValue = rootVal*10 + root.val;
        if(root.left === null && root.right === null ){
            sum += rootValue;
        }
        root.left && helper(root.left, rootValue);
        root.right && helper(root.right, rootValue);
    }
    helper(root);
    return sum;
};

