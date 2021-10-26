const { buildLinkedList } = require('./testLinkList');

let head = buildLinkedList([1,2,3,4,5]);
//console.log(head)


/**
 * 1. Reverse a singly linked list.
	Input: 1->2->3->4->5->NULL
	Output: 5->4->3->2->1->NULL
	
	2. Middle of the Linked List
	Input: [1,2,3,4,5]
	Output: Node 3 from this list
	
	3. Merging Two Linked Lists.
	Input: 1->2->4, 1->3->4
	Output: 1->1->2->3->4->4
	
	4. Delete Node in a Linked List
	Input: head = [4,5,1,9], node value = 5
	Output: [4,1,9]
	
	5. Reverse Linked List II
	Input: 1->2->3->4->5->NULL, m = 2, n = 4
    Output: 1->4->3->2->5->NULL
 */

 /**
  * 1. Reverse a singly linked list.
	Input: 1->2->3->4->5->NULL   2-->1
	Output: 5->4->3->2->1->NULL
  */

  const reverse = (head) => {
      let root = head;
      while(root){
        let temp = root;
        root.next.next = root;
        root = root.next;
        temp.next = null
      }

      return head;
  }

 // console.log(reverse(head))



  /**
   * 2. Middle of the Linked List
	Input: [1,2,3,4,5]
	Output: Node 3 from this list
   */
   const findMiddle = (node) => {
       let slow = node;
       let fast = node;

       while(fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
       }

       return slow;
   }

   //console.log(findMiddle(head));



   /**
    * 	3. Merging Two Linked Lists.
	Input: 1->2->4, 1->3->4
	Output: 1->1->2->3->4->4
    */

    class ListNode {
        constructor(){
            this.val = 0;
            this.next = null
        }
    }

    const mergeTwo =(l1, l2) => {
        if(!l1) return l2;
        if(!l2) return l1;

        let dummy = new ListNode(null);


        while( l1 && l2){
            if(l1.val <= l2.val){
                dummy.next = l1;
                l1 = l1.next;
            }else{
                dummy.next = l2;
                l2 = l2.next;
            }

            dummy = dummy.next;
        }

        dummy.next = l1 ? l1 : l2;

        return head;
    }

    let nodeOne = buildLinkedList([1,2,4]);
    let nodeTwo = buildLinkedList([1,3,4]);

    //console.log(mergeTwo(nodeOne, nodeTwo));

    /**
     * 	4. Delete Node in a Linked List
	Input: head = [4,5,1,9], node value = 5
	Output: [4,1,9]
     */

     const deleteNode = (head, n) => {

        let dummy = new ListNode();
        dummy.next = head;

        while(dummy && dummy.next){
            if(dummy.next.val === n){
                dummy.next = dummy.next.next;
            }

            dummy = dummy.next;
        }

        return head;
     }

     let nodeDelete = buildLinkedList([4,5,1,9]);
     //console.log(deleteNode(nodeDelete, 5));


     /**
      * 5. Reverse Linked List II
	Input: 1->2->3->4->5->NULL, m = 2, n = 4
    Output: 1->4->3->2->5->NULL
      */

      const reverseII = (head, m, n) => {
          let root = head;
          
          let index = 1;
          while(index < m){
              root = root.next;
              index++
          }

          let reverseRoot = root; 
          let dummy = new ListNode();

          while(index <= n){

          }
      }

