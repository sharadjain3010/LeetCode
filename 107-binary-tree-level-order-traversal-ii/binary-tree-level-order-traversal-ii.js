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
var levelOrderBottom = function(root) {
    const queue = [];
    const arr = [];
    queue.push(root);

    if(root === null){
        return [];
    }

    while(queue.length > 0){
        const level = [];
        const qLength = queue.length;

        for(let i=0; i< qLength; i++){
            const el = queue.shift();
            level.push(el.val);
            el.left && queue.push(el.left);
            el.right && queue.push(el.right);
        }
        arr.push(level);
    }

    return arr.reverse();
};