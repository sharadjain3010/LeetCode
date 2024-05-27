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
 * @return {boolean}
 */
var isBalanced = function(root) {
    let isBalanced = true;

    const maxDepth = (root)=>{
        if(root === null){
            return 0;
        }

        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        if(Math.abs(left-right) >1 ){
            isBalanced = false
        }
        return 1 + Math.max(left, right);
    }
    maxDepth(root);

    return isBalanced;

};