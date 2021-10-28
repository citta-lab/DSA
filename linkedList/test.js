/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    let root = head;
    let middle = findMiddle(head);
    console.log(root)
    console.log(middle)
    
    let cur = middle;
    let pre = null;
    let future = null;
    
    while(cur ){
        future = cur.next;
        cur.next = pre;
        
        pre = cur;
        cur = future;   
    }

    console.log(" root again ")
    console.log(root)
    let first = root;
    let listTwo = pre;
    
    
     while (listTwo.next != null) {
      let tmp = first.next;
      first.next = listTwo;
      first = tmp;

      tmp = listTwo.next;
      listTwo.next = first;
      listTwo = tmp;
    }
    
    //let mergedList = mergeTwo(listOne, listTwo);
    
    // console.log("-------- lists -------")
    // console.log(listOne);
    // console.log(listTwo);
    // console.log(" ******** merged data ********** ")
    // console.log(mergedList);
   
    
    
};


const mergeTwo = (l1, l2) => {
    if(!l1 && !l2) return null;
    
    let dummy = new ListNode(null);
    let head = dummy;
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            dummy.next = l1;
            l1 = l1.next;
        }else{
             console.log(l2.val)
            dummy.next = l2;
            l2 = l2.next;
        }
        
        dummy = dummy.next;
    }
    
    //dummy.next = l2 ? l2 : l1;
    
    return head.next
}


















const findMiddle = (head) => {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){
        fast = fast.next.next;
        slow = slow.next;
    }
    
    return slow;
}

