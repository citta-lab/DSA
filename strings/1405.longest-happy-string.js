/**
 *
 * 1405. Longest Happy String
 *
 *
 * A string s is called happy if it satisfies the following conditions:
 * 
 * s only contains the letters 'a', 'b', and 'c'.
 * s does not contain any of "aaa", "bbb", or "ccc" as a substring.
 * s contains at most a occurrences of the letter 'a'.
 * s contains at most b occurrences of the letter 'b'.
 * s contains at most c occurrences of the letter 'c'.
 * Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. 
 * If there is no such string, return the empty string "". 
 *
 * A substring is a contiguous sequence of characters within a string.
 * 
 *
 * Example:
 * Input: a = 1, b = 1, c = 7
 * Output: "ccaccbcc"
 *
 * Input: a = 7, b = 1, c = 0
 * Output: "aabaa"
 * 
 * leetcode-question:1405
 * leetcode:https://leetcode.com/problems/longest-happy-string/
 *
 * Similar Question: https://github.com/citta-lab/DSA/blob/main/strings/984.string-without-AAA-or-BBB.js
 *
 * Hint:
 * - Greedy Appraoch : Time:O(N) Space:O(N) where N is number of chars count (a+b+c) . 
 * - Focus on starting the combination from char which has more value i.e c = 7 
 * - We will use countA, countB, countC as counter to create valid combination of 'abc'
 * - use ARRAY to add chars which then be joined to produce the RESULT 
 *
 *
 * - Max Heap Appraoch:
 * - By doing this we are not limited to a,b and c as input it can be any number of chars
 */

/** Greedy Appraoch */ 
var longestDiverseString = function(a, b, c) {
    
    /** counter to create combination of a,b,c i.e if countB = 2 then we move towards adding c or a vice versa */
    let countA = 0;
    let countB = 0;
    let countC = 0;
    
    const result = [];
    
    /** we need to atleast have count more than 0 to begin with */
    while(a > 0 || b > 0 || c > 0){
        
        /** verify if we have more a's */
        if((a >= b && a >= c && countA < 2) || (countB === 2 && a > 0) || (countC === 2 && a > 0)){
            result.push('a');
            countA ++
            a --
            
            /** resetting helps to create next combination of abc */
            countB = 0
            countC = 0
        }
        
        else if ((b >= a && b >= c && countB < 2) || (countA === 2 && b > 0) || (countC === 2 && b > 0)){
            result.push('b');
            countB ++
            b --
            
            countA = 0
            countC = 0
        }
        
        else if ((c >= a && c >= b && countC < 2) || (countB === 2 && c > 0) || (countA === 2 && c > 0)){
            result.push('c');
            countC ++
            c --
            
            countA = 0
            countB = 0
            
        }
        
        else {
            break
        }
    }
    
    return result.join('')
};


/*********************************************************** 
 * 
 * Better Appraoch: Max Heap
 * Note: By doing this our input is not limited to just three
 * charatecters a,b, and c.
 * 
 * This DOESNT work, need to fix
 * *********************************************************/
 var longestDiverseString = function(a, b, c) {
    
    /** step 1: use maxHeap, add char:value to heap if we have value > 0 */
    
    let maxHeap = new Heap();
    
    if(a > 0) maxHeap.push({ char: 'a', count: a});
    
    if(b > 0) maxHeap.push({ char: 'b', count: b});
    
    if(c > 0) maxHeap.push({ char: 'c', count: c});
    
    let result = '';
    let previousChar = null;
    
    /** if we have values in heap, we need to process until the end */
    while(maxHeap.heap.length > 0){
        let maxValueChar = maxHeap.poll();
        
        /** if we have same char count more than 2 - then use until max limit we are allowed */
        if(maxValueChar.count >= 2 && (previousChar === null || previousChar.count < maxValueChar.count )){
            result += maxValueChar.char;
            result += maxValueChar.char;
            
            maxValueChar.count --
            maxValueChar.count --
        }else if (maxValueChar.count >= 1){
            /** if the char count is more than 1 or equal to 1 */
            result += maxValueChar.char;
            maxValueChar.count --
        }
        
        if(previousChar?.count > 0){
            maxHeap.push(previousChar);   
        }
    
        previousChar = maxValueChar;
        
    }

    return result
    
};



/** max heap implementation */
class Heap {
    constructor(){
        this.heap = []
    }

    getParentIdx(i){
        return Math.floor((i-2/2));
    }

    getLeftChildIdx(i){
        return i*2+1;
    }

    getRightChildIdx(i){
        return i*2+2;
    }

    /** used while heapifying due to insert/delete actions */
    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    /** add elements to last of the array and then heapify to rearrange */
    push(key){
        this.heap.push(key);
        this.heapifyUp();
    }

    heapifyUp(){

        let currentIdx = this.heap.length-1;
        
        /** 
         * if current value is more than it's parent, we need to swap until current value becomes the parent
         * of all lesser child values. Hence swap and then update the current index to parent of it's current
         * index. 
         */
        while(this.heap[currentIdx] < this.heap[this.getParentIdx(currentIdx)]){
            this.swap(currentIdx, this.getParentIdx(currentIdx));
            currentIdx = this.getParentIdx(currentIdx);
        }
    }

    poll(){
        let maxElement = this.heap[0]; /** first element is always max */
        this.heap[0] = this.heap[this.heap.length-1]; /** assign last left most value to top */
        this.heap.length -- /** reduce the length as we just took one element off the array */
        this.heapifyDown(); /** readjust */
        
        return maxElement;
    }

    heapifyDown(){
        let currentIdx = 0; /** index of top element */

        /** 
         * Step 0: find if we have left child as our binary heap must have left child otherwise it is empty
         * Step 1: find biggest child between left and right
         * Step 2: swap current value with biggest value using swap and passing index
         * Step 3: update current to the latest biggest value we swapped with so we can keep checking
         */

        while(this.heap[this.getLeftChildIdx(currentIdx)]){
            let smallestChildIdx = this.getLeftChildIdx(currentIdx);

            if(this.heap[this.getRightChildIdx(currentIdx)] 
            && this.heap[this.getRightChildIdx(currentIdx)] < this.heap[this.getLeftChildIdx(currentIdx)]){
                smallestChildIdx = this.getRightChildIdx(currentIdx);
            }

            if(this.heap[currentIdx] > this.heap[smallestChildIdx]){
                this.swap(currentIdx, smallestChildIdx);
                currentIdx = smallestChildIdx;
            }else{
                return
            }

        }

    }
}
