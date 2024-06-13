/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if(preorder.length == 0) return null;

    const createNode = (preorder)=>{
        if(preorder.length == 0) return null;
        let root = new TreeNode(preorder[0], null, null);
        const leftTreeArr = preorder.filter((el)=>{return el<preorder[0]});
        const rightTreeArr =  preorder.filter((el)=>{return el>preorder[0]});
        root.left = createNode(leftTreeArr);
        root.right = createNode(rightTreeArr);

        return root;
    }

    return createNode(preorder);
};