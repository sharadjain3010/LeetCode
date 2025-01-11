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
    let currentElement;
    let current = head;
    while(current !== null){
        currentElement = current.val;
        while(stack.length > 0 && stack[stack.length-1] < currentElement ){
            stack.pop();
        }
        stack.push(current.val);
        current = current.next;
    }
    let dummyNode = new ListNode(0);
    let updatedList = dummyNode;
    stack.forEach((el)=>{
        dummyNode.next =  new ListNode(el);
        dummyNode = dummyNode.next;
    });

    return updatedList.next;
};