/** 
 * 
 * 217. Contains Duplicate 
 * 
 * Given an integer array nums, return true if any value appears at least twice in the array, 
 * and return false if every element is distinct. 
 * 
 * 
 * Input: nums = [1,2,3,1]
 * Output: true
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * 
 * leetcode-question:217
 * leetcode:https://leetcode.com/problems/contains-duplicate/
 * 
 * BLIND:50 (50/75)
 * 
 * Hint:
 * There are many data structures commonly used as dynamic sets such 
 * as Binary Search Tree and Hash Table. 
 * The operations we need to support here are search() and insert(). 
 * For a self-balancing Binary Search Tree (TreeSet or TreeMap in Java), search() and insert()
 *  are both O(\log n)O(logn) time. For a Hash Table (HashSet or HashMap in Java), search() 
 * and insert() are both O(1)O(1) on average. Therefore, by using hash table, we can achieve 
 * linear time complexity for finding the duplicate in an unsorted array.
 * 
 * */

 /** time:O(n) and space:O(nzx) */
 var containsDuplicate = function(nums) {
    let visited = new Set();
    for(let num of nums){
        if(visited.has(num)){
            return true;
        }
        
        visited.add(num);
    }
    
    return false;
};