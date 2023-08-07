

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

 function ListNode(val, next) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
    }
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersBeta = function(l1, l2,carry) {
    if(!l1 && !l2 && !carry) return null
    let total = (l1?l1.val:0) + (l2?l2.val:0) + (carry||0);
    carry = parseInt(total/10);
    return new ListNode(total%10,addTwoNumbersBeta(l1?.next,l2?.next,carry))
    
};
console.log(addTwoNumbersBeta([2, 4, 1, 4, 5], [5, 6, 4]));
