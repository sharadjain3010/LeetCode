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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y, map={}, height=0, parent=null) {
    map[root.val] = {height: height, parent: parent};

    root.left && isCousins(root.left, x, y, map, height+1, root.val);
    root.right && isCousins(root.right, x, y, map, height+1, root.val);

    if(map[x] && map[y]){
        if(map[x].height === map[y].height && map[x].parent !== map[y].parent){
            return true;
        } 
        return false;
    }
};