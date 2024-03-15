/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var isPalindrome = function(head) {
//     const node = head;
//     if(head == null || head.next == null){
//         return true;
//     }
//     let reversedListHead = reverseLinkedList(node);
//     while(head && reversedListHead){
//         if(head.val !== reversedListHead.val){
//             return false;
//         }
//         head = head.next;
//         reversedListHead = reversedListHead.next;
//     }
//     return true;
// };

// var reverseLinkedList = function(head){
//     let prev = null;
    
//     while(head){
//         let nextNode = head.next;
//         head.next = prev;
//         prev = head;
//         head = nextNode;
//     }
//     return prev;
// }


var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = slow;
    slow = slow.next;
    prev.next = null;
    while(slow){
       let temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }

    while(prev){
        if(head.val !== prev.val){
            return false;
        }
        head = head.next;
        prev = prev.next;
    }

    return true;
}