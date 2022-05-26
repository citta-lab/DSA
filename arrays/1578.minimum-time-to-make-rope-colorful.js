/**
 * 1578. Minimum Time to Make Rope Colorful
 *
 * Alice has n balloons arranged on a rope. You are given a 0-indexed string colors where colors[i] is the color of the ith balloon.
 * Alice wants the rope to be colorful. She does not want two consecutive balloons to be of the same color, 
 * so she asks Bob for help. Bob can remove some balloons from the rope to make it colorful. You are given a 0-indexed integer array 
 * neededTime where neededTime[i] is the time (in seconds) that Bob needs to remove the ith balloon from the rope.
 * 
 * Return the minimum time Bob needs to make the rope colorful.
 *
 * Input: colors = "abaac", neededTime = [1,2,3,4,5]
 * Output: 3
 *
 * Input: colors = "aaabbbabbbb", neededTime = [3,5,10,7,5,3,5,5,4,8,1] <-- IMP why we need to update neededTime[i] = Math.max() 
 * Output: 3
 *
 * leetcode:https://leetcode.com/problems/minimum-time-to-make-rope-colorful/
 * leetcode-question:1578
 * ref: https://leetcode.com/problems/minimum-time-to-make-rope-colorful/discuss/841690/My-Java-Solution-O(n)
 *
 * Hint:
 * - Time:O(N) and Space:O(1)
 * - we will compare between i'th and i-1'the colors 
 * - if they are same, then we will take min between them ( becasue we will only need to remove one )
 * - we will also need to update neededTime for i'th need be updated to max value between i'th and i-1'th 
 * because we need to retain max time as we picked min value in previous step
 */

/** Time:O(N) and Space:O(1) */
var minCost = function(colors, neededTime) {
    let result = 0;
    for(let i=1; i<colors.length; i++){
        if(colors[i] === colors[i-1]){
            
            /** we need min time it will take between two consecutive baloons */
            result += Math.min(neededTime[i], neededTime[i-1]);
            
            /** 
            Example: [b,b,b] and time=[8,4,6] 
            
            we took min however if i-1'th value is 8, i'th value is 4 then
            in previous step we took min between them i.e 4. However when we move
            to next item (i+1) which is of same color then we compare againt i'th
            value i.e 4 and current value 6. At this point we pick min value as 4 
            (comapred between 4,6 ) which is WRONG. instead it should be between
            value 8 and 6. 
            
            hence we update neededTime[i] with Math.max(neededTime[i], neededTime[i-1]) 
            before going next
            
            */
            
            neededTime[i] = Math.max(neededTime[i], neededTime[i-1]); 
        }
    }
    
    return result
};
