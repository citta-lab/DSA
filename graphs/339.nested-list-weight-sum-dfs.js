/** 
 * 
 * 339. Nested List Weight Sum 
 * 
 * You are given a nested list of integers nestedList. Each element is either an integer 
 * or a list whose elements may also be integers or other lists. The depth of an integer 
 * is the number of lists that it is inside of. For example, the nested list
 *  [1,[2,2],[[3],2],1] has each integer's value set to its depth.
 * 
 * Return the sum of each integer in nestedList multiplied by its depth.
 * 
 * Input: nestedList = [[1,1],2,[1,1]]
 * Output: 10
 * Explanation: Four 1's at depth 2, one 2 at depth 1. 1*2 + 1*2 + 2*1 + 1*2 + 1*2 = 10.
 * 
 * Input: nestedList = [1,[4,[6]]]
 * Output: 27
 * 
 * leetcode-question:339
 * leetcode:https://leetcode.com/problems/nested-list-weight-sum/
 * company: FACEBOOK
 * 
 * Hint:
 * - Time: O(N) and Space:O(N)
 * - DFS or BFS
 * - start depth = 1 and call dfs(list, 1)
 * - define dfs with dfs(list, depth, sum=0)
 * - sum is to calculate number * depth 
 */

/**Time:O(N) and Space:O(N) */
var depthSum = function(nestedList) {
    let depth = 1;
    return dfs(nestedList, depth);
};

function dfs(list, depth, total=0){
    
    for(let i=0; i<list.length; i++){
        let item = list[i];
        
        /** isInteger is given helper function */
        if(item.isInteger()){
            /** getInteger is given helper function */
            total += depth * item.getInteger();
        }else{
            /** getList is given helper function */
            total += dfs(item.getList(), depth+1);
        }
    }
    
    return total
}