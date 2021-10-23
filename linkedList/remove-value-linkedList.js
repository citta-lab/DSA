/** Given a linkedList head remove all occurence of given value
 * Example: 1 --> 2--> 3-->4-->5-->3--->4--->3
 * remove 3
 * 1-->2-->4-->5-->4
 */
 const { buildLinkedList } = require('./LinkedList');

 const removeNode = (head, removeValue) => {
     
    if(!head) return head;

     if(head){
         let start = head;
          while(start && start.next){

            /** case 1: if our first node itself is a match then we just move the head pointer to next */
            if(start.data === removeValue){
                head = start.next;
            }

            /** case 2: we peak the next value, if it's a match then we change our next to next's next */
            if(start.next.data === removeValue){
                start.next = start.next.next;
            }

            /** if 1 & 2 didn't happen it we didnt find a match yet, so lets keep iterating */
            start = start.next;
          }
     }

     /** return head so it will show the entire list */
     return head;
 }

 const listOneHead = buildLinkedList([1,2,3,4]);
 console.log(removeNode(listOneHead, 3)); // 1-->2-->4

 const listTwoHead = buildLinkedList([1,2,3,4]);
 console.log(removeNode(listTwoHead, 1)); // 2-->3-->4

 const listThreeHead = buildLinkedList([2,3,2,2,4,5,2]);
 console.log(removeNode(listThreeHead, 2)); // 4-->5
