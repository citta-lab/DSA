/** 
 * 
 * 23. Merge k Sorted Lists 
 * 
 * You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
 * Merge all the linked-lists into one sorted linked-list and return it. 
 * 
 * Input: lists = [[1,4,5],[1,3,4],[2,6]]
 * Output: [1,1,2,3,4,4,5,6]
 * 
 * Input: lists = []
 * Output: []
 * 
 * Input: lists = [[]]
 * Output: []
 * 
 * leetcode-question:23
 * leetcode:https://leetcode.com/problems/merge-k-sorted-lists/
 * video:https://www.youtube.com/watch?v=q5a5OiGbT6Q
 * 
 * BLIND: 9 (9/75)
 * 
 * Hint:
 * - treat it like mergeTwo sorted linkedlist problem
 * 
 * */


// GIVEN 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

// given used for building data
const { buildLinkedList } = require('./LinkedListII');



/**
 * BRUTEFORCE: ( not the optimized ) 
 *
 * In this appraoch we use the concept of merging two sorted linkedList and keep applying to all of the
 * elements in the list until we find the final result. This can be our first step towards solving the
 * problem. 
 * 
 * Refer: merge-two-sorted-linkedList.js file for core idea. 
 * 
 * merging two sorted list = O(n+m) where n & m are first and second list node size
 * we have k number of merging.
 * O(kN) time where O(N) = O(n+m); 
 * O(1) space
 * 
 */
var mergeKLists = function(lists) {
    
    let l1 = lists[0];
    let l2 = lists[1];
    
    /** find the merge of first two and use the result for consecutive merges  */
    let head = mergeTwo(l1, l2);
    
    for(let i=2; i<lists.length; i++){
        head = mergeTwo(head, lists[i]);
    }
    
    return head;
};


/** read more here https://github.com/citta-lab/DSA/blob/e3e328aa2b4c0635352c49c882ab1c9a9f4ea33a/linkedList/merge-two-sorted-linkedList.js */
const mergeTwo = (l1, l2) => {
   
    let dummy = new ListNode(null);
    let head = dummy; 
    
    /** this is base condition to handle [] or [[]] linked list */
    if(!l1 && !l2) return dummy.next;
    
    while(l1 && l2){
        if(l1.val <= l2.val){
            head.next = l1;
            l1 = l1.next;
        }else{
            head.next = l2;
            l2 = l2.next;
        }
        
        head = head.next;
    }
    
    head.next = l1 ? l1 : l2;
    
    return dummy.next;
};


// let nodeA = buildLinkedList([1]);
// let nodeB = buildLinkedList([4]);
// let nodeC = buildLinkedList([3,4]);
// let nodeD = buildLinkedList([2]);

// console.log(mergeKLists([nodeA, nodeB, nodeC, nodeD])); // [1,2,3,4,4]
// console.log(mergeKLists([])); // [ ]
// console.log(mergeKLists([[]])); // [ ]

// nodeA = buildLinkedList([111,222,333]);
// nodeB = buildLinkedList([1,100]);
// console.log(mergeKLists([nodeA, nodeB])); // [1,100,111,222,333]


/** APPROACH II : DIVIDE and CONQUER
 * Same technique as above instead of merging and using the head for all rest of the lists merge. we 
 * split two lists at a time and merge them, repeat the process until end.
 * 
 * Refer : https://afteracademy.com/blog/merge-k-sorted-lists
 */

// O(N log k) where O(n) time for merging two lists of n nodes ( for both ) and log2K for merging splitting.
// O(1) space
/** time: O(N * logK) where N is total number of nodes in two lists */
var mergeKLists = function(lists) {
    
    /** step 1: 
        base base to handle when lists is [[]] or [] */ 
    if(!lists.length || !lists) return null
    
    /** 
    step 2: 
    we merge two list (pairs) at a time until we are left with last one 
    */
    while(lists.length > 1){
        
        /** we will hold result of every pair lists merge, then push this to lists */
        let newlyMergedLists = [];
        
        /** looping in pairs hence i=i+2 */
        for(let i=0; i<lists.length; i=i+2){
            let list1 = lists[i];
            let list2 = lists[i+1] || null; /** if lists.length is odd this fails so null */
            
            /** calling our TWO SORTED LINKEDLIST helper */
            let mergedListHead =  mergeTwoSorted(list1, list2);
            
            /** newMergedHead will be saved in our temp array */
            newlyMergedLists.push(mergedListHead);
        }
        
        /** imp: by doing this we keep merging until we are left with one list */
        lists = newlyMergedLists;
    }
    
    return lists[0];
};

function mergeTwoSorted(list1, list2){
    
    let dummy = new ListNode(null);
    let head = dummy;
    
    if(!list1 && !list2) return dummy.next;
    
    while(list1 && list2){
        
        if(list1.val <= list2.val){
            dummy.next = list1;
            list1 = list1.next;
        }else{
            dummy.next = list2;
            list2 = list2.next;
        }
        
        dummy = dummy.next; 
    }
    
    dummy.next = list1 ? list1 : list2;
    
    return head.next; 
}



 nodeA = buildLinkedList([1]);
 nodeB = buildLinkedList([4]);
 nodeC = buildLinkedList([3,4]);
 nodeD = buildLinkedList([2]);

console.log(mergeKListsTwo([nodeA, nodeB, nodeC, nodeD])); // [1,2,3,4,4]
console.log(mergeKListsTwo([])); // [ ]
console.log(mergeKListsTwo([[]])); // [ ]

nodeA = buildLinkedList([111,222,333]);
nodeB = buildLinkedList([1,100]);
console.log(mergeKListsTwo([nodeA, nodeB])); // [1,100,111,222,333]

nodeE = buildLinkedList([1]);
nodeF = buildLinkedList([4]);
nodeG = buildLinkedList([3,4]);
nodeH = buildLinkedList([2]);

console.log(mergeKListsTwo([nodeA, nodeB, nodeC, nodeD, nodeE, nodeF, nodeG, nodeH]));