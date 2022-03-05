/** 
 * 
 * 165. Compare Version Numbers  
 * 
 * Given two version numbers, version1 and version2, compare them. Version numbers consist 
 * of one or more revisions joined by a dot '.'. Each revision consists of digits and may 
 * contain leading zeros. Every revision contains at least one character. Revisions are 
 * 0-indexed from left to right, with the leftmost revision being revision 0, the next 
 * revision being revision 1, and so on. For example 2.5.33 and 0.1 are valid version numbers.
 * 
 * Return the following:
 * - If version1 < version2, return -1.
 * - If version1 > version2, return 1.
 * - Otherwise, return 0.
 *
 * Input: version1 = "1.0", version2 = "1.0.0"
 * Output: 0
 * 
 * Input: version1 = "1", version2 = "1.1"
 * Output: -1
 * 
 * Input: version1 = "0.1", version2 = "1.1"
 * Output: -1
 * 
 * leetcode-question:165
 * leetcode:https://leetcode.com/problems/compare-version-numbers/
 * 
 * Hint:
 * - Time: O(N+M) Space: O(N+M)
 * - we will do in TWO pass 
 * - Split them by '.' so . is removed and stored as array
 * - fing the max length between them 
 * - loop though each char while checking and appending 0 if one of them is shorter
 * -- i.e vOneNum = i < vOneSzie : parseInt(vOne[i]) : 0
 * - compare vOneNum with vTwoNum and return 
 * 
 */

/** time : O(N+M) space:O(N+M) */
var compareVersion = function(version1, version2) {
    
    let vOne = version1.split('.');
    let vTwo = version2.split('.');
    
    let vOneSize = vOne.length;
    let vTwoSize = vTwo.length;
    
    let maxSize = Math.max(vOneSize, vTwoSize);
    for(let i=0; i<maxSize; i++){
        
        /** 
        if numbers are not of same length then we need
        to append 0's to make it of same length.
        i.e 
        if v1 = 1 2 3 and v2 = 1 then we add 0's to v2
        so it will become 1 0 0. 
        */
        
        let vOneNum = i < vOneSize ? parseInt(vOne[i]) : 0
        let vTwoNum = i < vTwoSize ? parseInt(vTwo[i]) : 0
        
        if(vOneNum > vTwoNum){
            return 1
        }else if (vTwoNum > vOneNum){
            return -1
        }
    }
    
    return 0
};