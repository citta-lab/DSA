/**
 * 
 * 1653. Minimum Deletions to Make String Balanced
 * 
 * You are given a string s consisting only of characters 'a' and 'b'​​​​.
 * 
 * You can delete any number of characters in s to make s balanced. 
 * s is balanced if there is no pair of indices (i,j) such that i < j and s[i] = 'b' and s[j]= 'a'.
 * Return the minimum number of deletions needed to make s balanced.
 * 
 * Examples:
 * Input: s = "aababbab"
 * Output: 2
 * 
 * Input: s = "bbaaaaabb"
 * Output: 2
 * 
 * leetcode-question:1653
 * leetcode:https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/
 * refer: https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/discuss/997750/6-different-approaches%3A-from-basic-to-the-most-optimal-(C%2B%2B)
 * 
 * Hint:
 * - THREE PASS
 * - Time:O(N) and Space:O(1) 
 * - At every posiiton we need to count number of a elements on LEFT side ( so i=s.length-1 )
 * - At every position we need to count number of b elements on RIGHT side 
 * - The minimum between them is SOMETHING we need to remove to make it GOOD
 * 
 * - TWO PASS
 * - Time: O(N) and Space:O(1)
 * - At every posiiton we need to count number of a elements on LEFT side ( so i=s.length-1 )
 * - Instead of calculating 'b' count, we can merge b's and result check in one run
 */

/** 
 * THREE PASS :: Time:O(N) and Space:O(1) 
 * Imp: you just have to count the number of 'b's to the right side of an element plus 
 * number of 'a's to the left of that and doing this for all elements we are going to 
 * find minimum cause that's what we need to delete. 
*/
var minimumDeletions = function(s) {
    
    /** step 1: 
        array to hold all a's count from right to left excluding the current position a */
    let a = new Array();
    
    let countA = 0;
    for(let i=s.length-1; i >= 0 ; i--){
        a[i] = countA;
        
        if(s[i] === 'a') countA++
    }
    
    console.log(a)
    
    let b = new Array();
    
    /** step 2: check number of b's count from left to right */
    let countB = 0;
    
    for(let i=0; i<s.length; i++){
        b[i] = countB;
        
        if(s[i] === 'b') countB++
    }
    
    console.log(b)
    
    /** step 3: now we have left,right count with respec to each element we can find min */
    let result = s.length; 
    for(let i=0; i<s.length; i++){
        result = Math.min(a[i]+b[i], result);
    }
    
    return result
    
};



/** 
 * TWO PASS:: Time:O(N) and Space:O(1) 
 * Imp: you just have to count the number of 'b's to the right side of an element plus 
 * number of 'a's to the left of that and doing this for all elements we are going to 
 * find minimum cause that's what we need to delete. 
*/
var minimumDeletions = function(s) {
    
    /** array to hold all a's count from right to left excluding the current position a */
    let a = new Array();
    
    let countA = 0;
    for(let i=s.length-1; i >= 0 ; i--){
        a[i] = countA;
        
        if(s[i] === 'a') countA++
    }
    
    console.log(a)
    
    /** maxium char we might need to remove, worst case */
    let result = s.length; 
    
    /** check number of b's count from left to right */
    let countB = 0;
    for(let i=0; i<s.length; i++){
        result = Math.min(result, a[i]+countB);
        
        if(s[i] === 'b') countB++
    }
    
    return result
    
};
