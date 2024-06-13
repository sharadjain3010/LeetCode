/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 When we perform in order traversal in binary tree it returns sorted array
 and there it can easily be checked to see if last value is less then next value
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    if(root.left == null && root.right == null) return true;
    let min = Math.max();
    let isBST = true;
    const validateBST = (root)=>{
        if(root === null) return 0;
        root.left && validateBST(root.left);
        if(min<root.val){
            min = root.val;
        }else{
            isBST = false;
        }
       root.right && validateBST(root.right);
    }
    validateBST(root);
   return isBST;
};