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
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0){
        return null
    }

    const root = new TreeNode(preorder[0]);

    const rootIndex = inorder.indexOf(preorder[0]);

    root.left = buildTree(preorder.slice(1, rootIndex+1), inorder.slice(0, rootIndex));
    root.right = buildTree(preorder.slice(rootIndex+1), inorder.slice(rootIndex+1));

    return root;
};