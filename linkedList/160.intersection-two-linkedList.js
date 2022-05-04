/** 
 *
 * 160. Intersection of Two Linked Lists
 *
Given the heads of two singly linked-lists headA and headB, 
return the node at which the two lists intersect. If the two 
linked lists have no intersection at all, return null. 

leetcode-question:160
leetcode:https://leetcode.com/problems/intersection-of-two-linked-lists/

Can you do without any space and reduce the time complexity ?
i.e Space O(1)

*/


/** Using Two Pointers ( appraoch I):
 Time: O(M+N) as pointers will traverse M and then N's nodes in second time
 Space: O(1)
*/

var getIntersectionNode = function(headA, headB) {
    
    let pointA = headA;
    let pointB = headB;
    
    while(pointA !== pointB){
        /** once shortest linkedList reaches tail, we set it to other linkedList head 
        this will make both first and second head to start traversing from same node in second round */
        pointA = pointA ? pointA.next : headB; 
        pointB = pointB ? pointB.next : headA;
        
    }
    
    return pointA
    
};

/** Using Two Pointers ( approach II ):
 Time: O(m) whichever is larger m or n
 Space: O(1)
*/

var getIntersectionNodeI = function(headA, headB) {
    
    let lengthA = 0;
    let lengthB = 0;
  
    /** STEP I: Find each linkedList's length */
    let firstA = headA;
    while(firstA){
     lengthA ++;
     firstA = firstA.next;
    }
    
    let firstB = headB;
    while(firstB){
     lengthB ++;
     firstB = firstB.next;
    }
    
  /** STEP II: based on length make them move so that they become equal in length */
    while(lengthA > lengthB){
        headA = headA.next;
        lengthA--
    }
    
    while(lengthA < lengthB){
        headB = headB.next;
        lengthB --
    }
    
    /** STEP III: now that we have equal length linkedList we can traverse them to find the meeting point */
    while(headA !== headB && headA && headB){
        headA = headA.next;
        headB = headB.next;
    }
    
    return headA || headB;
};


/**
 Bruteforce: 
 Using Set:
 O(M+N) time and O(M) space
*/
var getIntersectionNodeII = function(headA, headB) {
    
   let visited = new Set();

    while(headA){
     visited.add(headA);
     headA = headA.next;
    }
    
    while(headB){
     if(visited.has(headB)){
        return headB;   
     }
     
     headB = headB.next;
        
    }
    
    return null
};
