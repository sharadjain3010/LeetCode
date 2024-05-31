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

    findLeafNodes(root1, map1Arr);
    findLeafNodes(root2, map2Arr);

    if(map1Arr.length !== map2Arr.length){
        return false;
    }
    if(map1Arr.toString() !== map2Arr.toString()){
        return false;
    }
    return true;
};

function findLeafNodes(root, map){
    if(root.left === null && root.right === null){
        map.push(root.val);
    }

    root.left && findLeafNodes(root.left, map);
    root.right && findLeafNodes(root.right, map);
}
