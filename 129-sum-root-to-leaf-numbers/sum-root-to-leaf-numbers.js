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
    let arr = [];
    const helper = (root, rootVal=null)=>{
        const rootValue = rootVal ? `${rootVal}${root.val}` : `${root.val}`;
        if(root.left === null && root.right === null ){
            arr.push(rootValue);
        }
        root.left && helper(root.left, rootValue);
        root.right && helper(root.right, rootValue);
    }
    helper(root);
    return arr.reduce((acc, cur)=>{
        return Number(acc) + Number(cur);
    },0);
};

