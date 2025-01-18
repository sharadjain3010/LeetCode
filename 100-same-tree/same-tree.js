/**;
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    let isSame = true;

    if(!p && !q){
        return isSame;
    }

    if(!p && q || p && !q){
        return false;
    }

    const preOrderTraversal = (rootP, rootQ) =>{
        if((rootP.left && !rootQ.left) ||
        (rootP.right && !rootQ.right) || 
        (!rootP.left && rootQ.left) ||
        (!rootP.right && rootQ.right) ||
        rootP.val !== rootQ.val){
            isSame = false;
            return;
        }
        rootP.left && rootQ.left && preOrderTraversal(rootP.left, rootQ.left);
        rootP.right && rootQ.right && preOrderTraversal(rootP.right, rootQ.right);
    }
    preOrderTraversal(p,q);

    return isSame;
};