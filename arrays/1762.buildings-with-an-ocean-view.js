/** 
 * 
 * 1762. Buildings With an Ocean View  
 * 
 * There are n buildings in a line.
 * You are given an integer array heights of size n that represents the heights of the
 * buildings in the line. The ocean is to the right of the buildings. A building has 
 * an ocean view if the building can see the ocean without obstructions. 
 * Formally, a building has an ocean view if all the buildings to its right have a smaller
 * height. Return a list of indices (0-indexed) of buildings that have an ocean view, 
 * sorted in increasing order.
 * 
 * Input: heights = [4,2,3,1]
 * Output: [0,2,3]
 * 
 * leetcode-question:1762
 * leetcode:https://leetcode.com/problems/buildings-with-an-ocean-view/
 * company:FACEBOOK
 * 
 * Hint:
 * - Time:O(N) and Space:O(1) except result array
 * - Look at the problem right to left 
 * - Having maxHeight as the tallest we can keep comparing buildings
 * from right to left.
 * - resulting array will have index from right to left. but we need
 * in reserse order.
 * - Apply reserver which is O(N). If we use sort it will worl but 
 * time compexlity is O(nlogN)
 * 
 */

/** BruteForce Time:O(nlogN) Space:O(1) except the output */
var findBuildings = function(heights) {
  
    let maxHeight = 0;
    let result = [];
    
    for(let i=heights.length-1; i>=0 ; i--){
        let cur = heights[i];
        if(cur > maxHeight){
            result.push(i);
            maxHeight = Math.max(cur, maxHeight);
        }
    }
    
    console.log(result)
    return result.sort((a,b) => a-b)
    
};


/************************************************************* 
 * 
 * BEST APPRAOCH : Time:O(N) and Space:O(1)
 * 
 * Moving from Right to Left is the most optimal solution unlike
 * the below BETTER APPROACH ( left to right ). However we can
 * optimize the time complexity further by using REVERSE instead
 * of SORT.
 * 
**************************************************************/


/** Time:O(N) and Space:O(1) */
var findBuildings = function(heights) {
    let maxHeight = 0;
    let result = [];
    
    for(let i=heights.length-1; i>=0 ; i--){
        let cur = heights[i];
        if(cur > maxHeight){
            result.push(i);
            maxHeight = Math.max(cur, maxHeight);
        }
    }
    
    console.log(result)
    return result.reverse(); /** takes O(N) unlike sort */
};

/************************************************************* 
 * 
 * Better Appraoch: Time:O(N) and Space: O(N)
 * 
 * Instead of looking right, we will imagine every building from left
 * has OCEAN VIEW and add it to RESULT array. Then we comapre with
 * current building if the previoulsy added building in RESULT array
 * is smaller ( can that building still has ocean view ) using "WHILE"
 * loop so we check all previous buildings. If yes then
 * we remove building from RESULT and add current one.
 * 
**************************************************************/

/** Time: O(N) and Space:O(N) */
var findBuildings = function(heights) {
    let size = heights.length;
    
    /** only holds the index of building */
    let result = [];
    
    for(let current=0; current<size; current++){
        
        /** 
        if previously added building is smaller in result
        than current then we need to remove previous building
        index from result, and add current building index
        */
        while(result.length 
              && heights[result[result.length-1]] <= heights[current])         {
            result.pop();  /** <-- removing previous building as its smaller */
        }
        
        /** adding current building */
        result.push(current);
    }
    
    return result;
};