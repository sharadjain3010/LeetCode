/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let l1 = headA;
    let l2 = headB;
    let skipA = false;
    let skipB = false;

    while(l1 && l2){
        if(l1 === l2){
            return l1;
        }
        l1 = l1.next;
        l2 = l2.next;
        if(l1 === null && !skipA){
            l1 = headB;
            skipA = true;
            
        }
        if(l2 === null && !skipB){
            l2 = headA;
            skipB = true;
        }
        
    }

    return null;
};