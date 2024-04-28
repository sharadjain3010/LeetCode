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
 // BFS solution
var maxDepth = function(root) {
    const arr = [];
    const queue = [root];

    if(root === null){
        return 0;
    }

    while(queue.length>0){
        const temp = [];
        const queueLen = queue.length;
        for(let i =0; i<queueLen; i++){
            const el = queue.shift();
            temp.push(el.val);
            el.left && queue.push(el.left);
            el.right && queue.push(el.right);
        }

        arr.push(temp);
    }

    return arr.length;
};

// DFS solution
// var maxDepth = function(root) {
   
// };
