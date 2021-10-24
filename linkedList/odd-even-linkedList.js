/** 
 * Given a sequence od number, move all odd postion values to end of the list 
 * Example: [1,2,3,4,5]
 * Output : [1,3,5,2,4]
 * 
 * Position of the movement should be the same
 * 
 * */

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
var oddEvenList = function(head) {
    if(!head) return head;
    
    if(head){
        let odd = head;
        let even = head.next;
        let newEvensHead = even;

        console.log("1 even : "+JSON.stringify(even));
        console.log(" 2 eve.next : "+JSON.stringify(even.next));
        
        while(even && even.next){
            
             console.log("3 odd.next : "+JSON.stringify(odd.next));
             console.log(" 4 odd.next.next ( future odd.next)  : "+JSON.stringify(odd.next.next));
            
            odd.next = odd.next.next;  // 1-->3
            even.next = even.next.next; // 2--->4;
            
            console.log("5 current odd : "+JSON.stringify(odd))

            odd = odd.next; // 3
            console.log("6 new odd : "+JSON.stringify(odd))
            even = even.next; // 4
            
            console.log("*************************")
        }

        odd.next = newEvensHead;
    }
 
    return head
};

console.log(oddEvenList([1,2,3,4,5]))

// 1 even : {"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}
//  2 eve.next : {"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}
// 3 odd.next : {"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}
//  4 odd.next.next ( future odd.next)  : {"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}
// 5 current odd : {"val":1,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}}
// 6 new odd : {"val":3,"next":{"val":4,"next":{"val":5,"next":null}}}
// *************************
// 3 odd.next : {"val":4,"next":{"val":5,"next":null}}
//  4 odd.next.next ( future odd.next)  : {"val":5,"next":null}
// 5 current odd : {"val":3,"next":{"val":5,"next":null}}
// 6 new odd : {"val":5,"next":null}
// *************************