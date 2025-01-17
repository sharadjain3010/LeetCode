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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let path = []
    let currentPath = `${root.val}`;
    if(!root) return path;

    if(root.left === null && root.right === null){
        path.push(currentPath);
        return path;
    }

    let preOrderTraversal = (root, currentVal)=>{
        currentVal = currentVal + '->' + root.val;

        if(root.left === null && root.right === null){
            path.push(currentVal);
        }
        root.left && preOrderTraversal(root.left, currentVal);
        root.right && preOrderTraversal(root.right, currentVal);
    
    }

    if(root.left){
        preOrderTraversal(root.left, currentPath)
    }

    if(root.right){
        preOrderTraversal(root.right, currentPath);
    }

    return path;
};
