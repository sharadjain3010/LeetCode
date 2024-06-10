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
var isValidBST = function(root) {
    if(root.left == null && root.right == null) return true;
    let min = Math.max();
    let isBST = true;
    const validateBST = (root)=>{
        if(root === null) return 0;
        root.left && validateBST(root.left);
        console.log(min, ' -- ', root.val);
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