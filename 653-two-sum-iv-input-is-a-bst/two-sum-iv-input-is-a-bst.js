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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const arr = [];

    const traverseTree = (root)=>{
        root.left && traverseTree(root.left);
        arr.push(root.val);
        root.right && traverseTree(root.right);
    }

    traverseTree(root);

    let l = 0; 
    let r = arr.length-1;
    while(l<r){
        if(arr[l]+arr[r] < k){
            l++;
        }else if(arr[l]+arr[r] > k){
            r--;
        }else{
            return true;
        }
    }
    return false;
};