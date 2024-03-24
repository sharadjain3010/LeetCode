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
var levelOrder = function(root) {
    if(root === null){
        return [];
    }

    var queue = [];
    var arr = [];
    queue.push(root);

    while(queue.length > 0){
        const qLength = queue.length;
        const level = [];
        for(let i=0; i<qLength; i++ ){
            let el = queue.shift();
            level.push(el.val);
            el.left && queue.push(el.left);
            el.right && queue.push(el.right);
        }
        arr.push(level);
    }

    return arr;
};

