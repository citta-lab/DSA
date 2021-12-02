# Floyd Cycle Find Alogithm in LinkedList

If the question is asked to find if the given linkedList is cylic ( if the node of linkedList points back to the one of the previous node then it forms a cyclic linkedList ). Floyd method suggests we can 
find if the linkedList is cylic by using `TWO POINTER` appraoch, which will yield in O(1) space. 

## How O(1) Space ? 
### O(N) using Set/Map : 
In typical way of checking we would need a map or set ( better option to avoid duplicates ). While traversing the linkedList if we find a node in the Set then we can say the given linkedList is cyclic but at the cost of extra space required for storing nodes in the Set datastructure. Though we might not
store all the nodes in Set, if the given linkedList doesnt have cycle we might might store all the N nodes ( worst case). Hence using Set or Map will cost us O(N) space. 

### O(1) using Two Pointer :
If we have two pointers starts at head i.e SLOW and FAST and if they meet at somepoint then we can conclude given linkedList is Cyclic. 
```js
let slow = head;
let fast = head; 

while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;

    /** hence we started slow and fast at head we need to increment before comparing */
    if(slow === fast) return true;
}
```

## Example
### Question 1: 
Given head, the head of a linked list, determine if the linked list has a cycle in it.    
Input: head = [3,2,0,-4], pos = 1    
Output: true     
Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).
leetcode: https://leetcode.com/problems/linked-list-cycle/    
solution: [cylic-linkedList](https://github.com/citta-lab/DSA/blob/9c91fda5e0886ba00e41fbfbdda9786846e11e73/linkedList/cyclic-linkedList.js);   

#### Answer:
```js
var hasCycle = function(head) {
    let slow = head;
    let fast = head;
    
    while(fast && fast.next){

        slow = slow.next;
        fast = fast.next.next;
        
        if(slow === fast){
            return true;
        }
    }
    
    return false;
};
```

### Question 2:
Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.Do not modify the linked list.     
Input: head = [3,2,0,-4], pos = 1    
Output: tail connects to node index 1     
leetcode: https://leetcode.com/problems/linked-list-cycle-ii/
solution: https://github.com/citta-lab/DSA/blob/main/linkedList/cyclic-LinkedListII.js

#### Answer:
```js
let slow = head;
let fast = head;

/** using these for finding the merge point */
let firstPointer = head;
let secondPointer = null; /** use null so we can detect if cyclic link is outbound */ 

while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;

    if(slow === fast){
        secondPointer = slow; /** this gives where our fast/slow met but its not the merging point */
        break; /** exit otherwise it will keep looping as we are not returning */
    }
}

/** now move our second set of pointers and hence its cyclic it will meet at merge place */
while(firstPointer && secondPointer){
    if(firstPointer === secondPointer) return firstPointer;
    firstPointer = firstPointer.next;
    secondPointer = secondPointer.next;
}
```
