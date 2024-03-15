/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let list = [];
    while(head){
        list.push(head.val);
        head = head.next;
    }

    const temp = list[k-1];
    list[k-1] = list[list.length - k];
    list[list.length - k] = temp;

    const newHead = new ListNode(list[0], null);
    let node = newHead;
    for(let i =1; i<list.length; i++){
        node.next = new ListNode(list[i], null);
        node = node.next;
    }

    return newHead;
};