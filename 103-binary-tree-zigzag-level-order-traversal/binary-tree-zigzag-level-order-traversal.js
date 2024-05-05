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
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    let queue = [root];
    let levelOrder = [];

    if(root === null){
        return levelOrder;
    }

    while(queue.length > 0){
        const arr = [];
        const qLength = queue.length;
        for(let i=0; i<qLength; i++){
            const el = queue.shift();
            arr.push(el.val);
            el.left && queue.push(el.left);
            el.right && queue.push(el.right);
        }
        levelOrder.length % 2 === 0 ?  levelOrder.push(arr) : levelOrder.push(arr.reverse());
    }
    return levelOrder;
};