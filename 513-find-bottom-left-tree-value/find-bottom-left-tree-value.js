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
var findBottomLeftValue = function(root) {
    let queue = [root];
    let levelNodes = [];

    while(queue.length>0){
        levelNodes = [];
        let qLength = queue.length;
        for(let i=0; i<qLength; i++){
            const el = queue.shift();
            el.left && queue.push(el.left);
            el.right && queue.push(el.right);
            levelNodes.push(el);
        }
       
    }
    return levelNodes.length > 0 ? levelNodes[0].val : null;
};