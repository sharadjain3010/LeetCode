/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length === 0){
        return null
    }

    rootEle = postorder[postorder.length-1];
    const root = new TreeNode(rootEle);
    const rootIndex = inorder.indexOf(rootEle);
    root.left = buildTree(inorder.slice(0,rootIndex ), postorder.slice(0,rootIndex));
    root.right = buildTree(inorder.slice(rootIndex+1), postorder.slice(rootIndex,-1));

    return root;
};