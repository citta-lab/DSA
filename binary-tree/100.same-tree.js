/** 
 * 
 * 100. Same Tree  
 * 
 * Given the roots of two binary trees p and q, write a function to check if 
 * they are the same or not. Two binary trees are considered the same if they 
 * are structurally identical, and the nodes have the same value. 
 * 
 * Input: p = [1,2,3], q = [1,2,3]
 * Output: true
 * 
 * Input: p = [1,2], q = [1,null,2]
 * Output: false
 * 
 * Input: p = [null], q = [null]
 * Output: true
 * 
 * leetcode:https://leetcode.com/problems/same-tree/
 * leetcode-question:100
 * 
 * BLIND: 26 (26/75)
 * 
 * */

/** time: O(n) ans space:O(logN) and O(n) in worst case */
var isSameTree = function(p, q) {
    let result = dfs(p, q);
    if(!result) return false;
    return true
};

function dfs(p, q){
    
    if(!p && !q) return true
    
    if(!p && q || p && !q) return false;
    
    if(p && q && p.val === q.val){
        return dfs(p.left, q.left) && dfs(p.right, q.right);
    }
    
    return false;
}