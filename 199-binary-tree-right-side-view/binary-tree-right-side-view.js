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

 var rightSideView = function(root, height = 1, arr = []) {
    
    if(root !== null){
        if(arr.length < height ){
            arr.push(root.val);
        }
        root.right && rightSideView(root.right, height+1, arr);
        root.left && rightSideView(root.left, height+1, arr);
    }
    return arr;
};

 // traver for BFS and then take the right most node for right view. 
// var rightSideView = function(root) {
//     const queue = [];
//     const arr = [];

//     queue.push(root);

//     if(root === null){
//         return [];
//     }

//     while(queue.length > 0){
//         const qLen = queue.length;
//         const level = [];

//         for(let i=0; i<qLen; i++){
//             const el = queue.shift();
//             level.push(el.val);
//             el.left && queue.push(el.left);
//             el.right && queue.push(el.right);
//         }   

//         arr.push(level);
//     }

//     return arr.map((el)=>{
//         return el[el.length-1]
//     })
// };