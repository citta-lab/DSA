/** given linked list split into k parts where each split should can have only one extra node if the splits are uneven and
 * initial splits should be the larger compared to later one.
 */

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
 * @return {ListNode[]}
 */

const { buildLinkedList } = require('./LinkedList');

var splitListToParts = function(head, k) {
    
    /** STEP 1: find size of linkedList */
    let size = 0;
    
    /** need to use another variable instead of traversing directly on the head.
    So we dont end up at the tail for next step */
    let root = head;
    while(root){
        size++
        root = root.next;
    }
    
    /** STEP 2: math to find node counts per split based on k, and handling any reminder */
    
    /** if splits = Math.round(size/k); is used then it will give wrong answer when [0] and 3 is k. 
    If k > len, Math.floor(len/k) would give us 0, so we can form parts of length 1 each.*/ 
    let splits = Math.floor(size/k) || 1; 
    
    /** need to check size > k becasue (size < k) when 3/5 happens it will give 3 
    which is wrong as you cant split 3 into 5. */
    
    let extraReminder = size > k ? size % k : 0; 
    
    let numberOfSplits = k;
    
    let result = []; // building result array
    
    /** STEP 3: making the split */
    while(numberOfSplits > 0){
        
        // add starting node, then we can detach the end once number of nodes are added per split
        result.push(head);
        
        let oldHead = null; // helps in dedatching head at every split size
        /** we only need to have 1 extra size per split if we have uneven size split */
        let sizePerSplit = extraReminder > 0 ? splits + 1 : splits; 

        while(head && sizePerSplit > 0){
            oldHead = head;
            head = head.next; 
            sizePerSplit --
        }
        
        // does the magic of splitting the chain at end of every split size
        if(oldHead ) oldHead.next = null;
        
        numberOfSplits --
        extraReminder --
    }
    
    return result
};

let nodeList = buildLinkedList([1,2,3,4,5])
console.log(splitListToParts(nodeList, 5)); // [[1],[2],[3],[4],[5]]

nodeList = buildLinkedList([1,2,3])
console.log(splitListToParts(nodeList, 5)); // [[1],[2],[3],[],[]]

nodeList = buildLinkedList([1,2,3,4,5,6,7,8,9,10]);
console.log(splitListToParts(nodeList, 3)); // [[1,2,3,4],[5,6,7],[8,9,10]]

nodeList = buildLinkedList([0]);
console.log(splitListToParts(nodeList, 5)); // [[0],[],[],[],[]]

nodeList = buildLinkedList([1,2,3]);
console.log(splitListToParts(nodeList, 15)); // [[1],[2],[3],[5],[],[],[],[],[],[],[],[],[],[],[]]