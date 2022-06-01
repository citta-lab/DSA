/**
 * 234. Palindrome Linked List
 * 
 * Given the head of a singly linked list, return true if it is a palindrome.
 * 
 * Input: head = [1,2,2,1]
 * Output: true
 * 
 * Input: head = [1,2]
 * Output: false
 * 
 * Hint:
 * Bruteforce: Time:O(N) and Space:O(N)
 * - traverse linkedList and add val to array 
 * - use TWO pointer left =0 and right = arr.length-1
 * - return true/false
 * 
 * Optimal: Time:O(N) and Space:O(N) <------- does't work for large number
 * - traverse linkedList 
 * - use two string, current = '' and reverse='';
 * - add value like current += val and reverse = val + reverse;
 * - return parseInt(current) === parseInt(reverse)
 * 
 * Optimal : Time:O(N) and Space:O(1)
 * 
 */

/********************************************************
 * 
 * Optimal: O(N) and Space:O(1)
 * 
 *******************************************************/
/** time:O(N) and Space:O(1) */
var isPalindrome = function(head) {
    
    let firstHalfEnd = findMid(head);                 // step 1: find mid 
    let secondHalfStart = reverse(firstHalfEnd.next); // step 2: reverse everyting after mid
    let result = compare(head, secondHalfStart);      // step 3: compare head && reversed linkedList
    
    /** restore the list - not needed but still */
    firstHalfEnd.next = reverse(secondHalfStart);
    
    return result 
};

function findMid(head){
    let dummy = head;
    
    let slow = head;
    let fast = head;
    
    while(fast && fast.next && fast.next.next){
        slow = slow.next;
        fast = fast.next.next; 
    }
    
    return slow;
}

function reverse(node){
    let prev = null;
    let cur = node;
    
    while(cur){
        let next = cur.next;
        cur.next = prev;
        
        prev = cur;
        cur = next;
    }
    
    return prev
}

function compare(list1, list2){
    
    let one = list1;
    let two = list2;
    
    while(one && two){
        if(one.val !== two.val){
            return false;
        }
        
        one = one.next;
        two = two.next;
    }
    
    return true;
}

/********************************************************
 * 
 * Not the BEST Optimal: O(N) and Space:O(1)
 * 
 *******************************************************/
 var isPalindrome = function(head) {
    
    let cur = '';
    let rev = '';
    
    let dummy = head;
    while(dummy){
        let val = dummy.val;
        cur += val;
        rev = val + rev;
        
        dummy = dummy.next;
    }
    
    return parseInt(cur) === parseInt(rev);
};


/********************************************************
 * 
 * BruteForce: O(N) and Space:O(N)
 * 
 *******************************************************/
 var isPalindrome = function(head) {
    
    let arr = [];
    
    let dummy = head;
    while(dummy){
        let val = dummy.val;
        arr.push(val);
        dummy = dummy.next;
    }
    
    let left = 0;
    let right = arr.length-1;
    
    while(left <= right){
        if(arr[left] !== arr[right]){
            return false;
        }
        
        left++
        right--
    }
    
    return true;
};