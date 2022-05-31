/**
 * Alexa is given n piles of equal or unequal heights.
 * In one step, Alexa can remove any number of boxes from the pile which has the maximum height and
 * try to make it equal to the one which is just lower than the maximum height of the stack.
 * Determine the minimum number of steps required to make all of the piles equal in height.
 * Input: piles = [5, 2, 1]
 * Output: 3
 * Explanation:
 * Step 1: reducing 5 -> 2 [2, 2, 1]
 * Step 2: reducing 2 -> 1 [2, 1, 1]
 * Step 3: reducing 2 -> 1 [1, 1, 1]
 * So final number of steps required is 3.
 *
 * @param {*} piles
 * 
 * ref: https://codesandbox.io/s/j6sz5?file=/src/index.js:583-1181
 * leetcode:https://leetcode.com/discuss/interview-question/364618/
 */

function minSteps(piles){
    
    if(!piles || !piles.length) return 0

    piles.sort((a, b) => a - b); // [1,2,2]
    
    let result = 0;
    let distinctValueCount = 0;

    for(let i=1; i<piles.length; ++i){
        
        if(piles[i] !== piles[i-1]){
            distinctValueCount++;
        } 

        result += distinctValueCount;
    }

    return result;
}


console.log(minSteps([2,2,1])); // 2
console.log(minSteps([4, 5, 5, 4, 2])); // 6
console.log("output: ", minSteps([1, 1, 2, 2, 2, 3, 3, 3, 4, 4])); // 15
