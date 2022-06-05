/**
 * 1257. Smallest Common Region
 * 
 * You are given some lists of regions where the first region of each list includes
 * all other regions in that list. Naturally, if a region x contains another region
 * y then x is bigger than y. Also, by definition, a region x contains itself.
 * 
 * Given two regions: region1 and region2, return the smallest region that contains
 * both of them. If you are given regions r1, r2, and r3 such that r1 includes r3,
 * it is guaranteed there is no r2 such that r2 includes r3.
 * 
 * It is guaranteed the smallest region exists.
 * 
 * Example:
 * Input: regions = [["Earth","North America","South America"],
 * ["North America","United States","Canada"],["United States","New York","Boston"],
 * ["Canada","Ontario","Quebec"],["South America","Brazil"]],
 * 
 * region1 = "Quebec",
 * region2 = "New York"
 * Output: "North America"
 * 
 * leetcode:https://leetcode.com/problems/smallest-common-region/
 * leetcode-question:1257
 * 
 * Hint:
 * LCA pattern: Time:O(N) and Space:O(N)
 * - regions has 1st item as parent of rest of them, so we can make map 
 * consists of "child":"parent" for each child.
 * - then we can make use of Set for adding parents for region1
 * - use the same set to check if we find "common" parent for region2
 */

 var findSmallestRegion = function(regions, region1, region2) {
    
    /** Step 1 - 
    lets make child: parent mapping where list[0] is parent.
    Rest of them are it's children. So we will have map like
    {"child":"parent"}
    */
    let childToParentMap = {};
    for(let list of regions){
        
        let mainRegion = list[0];
        for(let i=1; i<list.length; i++){
            let child = list[i];
            childToParentMap[child] = mainRegion;
        }
      
    }
    
    return findLowestCommonAncestor(childToParentMap, region1, region2);
};

function findLowestCommonAncestor(childToParent, region1, region2){
    
    /** we will use it to check if we find same parent for region1 and region2 */
    let ancestor = new Set();
    
    /** Step 2:
    We will traverse through map for region1, add all it's parent chain.
    Then we use the same set for region2, if we find the "COMMON" parent
    between them then we found the answer */
    
    let current = region1;
    while(current){
        ancestor.add(current);
        current = childToParent[current];
    }
    
    console.log(ancestor); // Set(4) { 'Quebec', 'Canada', 'North America', 'Earth' }
    
    /** 
     Step 3:
     now we have parent list for region1, so if we find a
     match then that is the LCA of region 1 and region 2
     */
    
    current = region2;
    while(current){
        if(ancestor.has(current)) return current; // <-- return as we found common parent
        ancestor.add(current);
        current = childToParent[current];
    }
}