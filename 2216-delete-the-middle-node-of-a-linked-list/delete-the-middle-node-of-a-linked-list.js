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
var deleteMiddle = function(head) {
    let prevSlow = null;
    let slow = head;
    let fast = head;
    if(head.next){
        while(fast && fast.next){
            prevSlow = slow;
            slow = slow.next;
            fast = fast.next.next;
        } 
        prevSlow.next = slow.next;
    }else{
        head = null;
    }
    return head;
};