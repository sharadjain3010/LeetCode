/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {
    let stack = [];
    let current = head;
    while(current !== null){
        while(stack.length > 0 && stack[stack.length-1].val < current.val ){
            stack.pop();
        }
        stack.push(current);
        current = current.next;
    }
    let dummyNode = new ListNode(0);
    let updatedList = dummyNode;
    stack.forEach((node)=>{
        dummyNode.next = node
        dummyNode = dummyNode.next;
    });

    return updatedList.next;
};