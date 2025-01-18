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
 * @return {number[]}
 */
var largestValues = function(root) {
    if(!root) return []

    let q = [root];
    const result = [];

    while(q.length > 0){
        const qLen = q.length;
        let max = Math.max();
        for(let i=0; i<qLen; i++){
            let element = q.shift();
            max = Math.max(element.val, max);
            element.left && q.push(element.left);
            element.right && q.push(element.right);
        }    
        result.push(max);
    }
    return result;
};