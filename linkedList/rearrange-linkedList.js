/** rearrange given linked list such that values less than 'k' should come before and value greater than
 * 'k' should come after.
 * 
 * Example: 
 * 4->2->3->7->1->9 where k = 3
 * result : 1->2->3->4->7->9
 * 
 * This only passes 8/11 test cases in algo expert. Verify why ?
 * https://www.algoexpert.io/questions/Rearrange%20Linked%20List
 */


// GIVEJN TO build data
const { buildLinkedList } = require('./LinkedListII');

// GIVEN NODE
class Node {
    constructor(){
        this.val = 0;
        this.next = null;
    }
}

// 4,5,6,2,3,7,1,9
const rearrangeLinkedList = (head, k) => {

    let smallerList = new Node(null);
    let greaterList = new Node(null);

    let smallerHead = smallerList;
    let greaterHead = greaterList;

    let root = head;
    
    while(root){
        if(root.val < k){
            smallerList.next = root;
            smallerList = smallerList.next;
        }else{
            greaterList.next = root;
            greaterList = greaterList.next;
        }

        root = root.next;
    }

    greaterList.next = null;
    smallerList.next = greaterHead.next;

    return smallerHead.next; 
} 


let node = buildLinkedList([4,5,6,2,3,7,1,9]);
console.log(rearrangeLinkedList(node, 3));

node = buildLinkedList([1,4,5,3,2,4,1,6])
console.log(rearrangeLinkedList(node, 3));

node = buildLinkedList([9,-3,7,-2])
console.log(rearrangeLinkedList(node, 3));