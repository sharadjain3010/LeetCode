/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    let map1Arr = [];
    let map2Arr = [];

    bottomView(root1, map1Arr);
    bottomView(root2, map2Arr);

    if(map1Arr.length !== map2Arr.length){
        return false;
    }
    for(let i=0; i< map1Arr.length; i++){
        if(map1Arr[i] !== map2Arr[i]){
            return false;
        }
    }
    return true;
};

function bottomView(root, map){
    if(root.left === null && root.right === null){
        map.push(root.val);
    }

    root.left && bottomView(root.left, map);
    root.right && bottomView(root.right, map);
}
