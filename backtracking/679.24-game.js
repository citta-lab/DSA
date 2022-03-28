/** 679. 24 Game 
 * 
 * You are given an integer array cards of length 4. You have four cards, 
 * each containing a number in the range [1, 9]. You should arrange the 
 * numbers on these cards in a mathematical expression using 
 * the operators ['+', '-', '*', '/'] and the parentheses '(' and ')' 
 * to get the value 24.
 * 
 * Return true if you can get such expression that evaluates to 24, and false otherwise.
 * 
 * Similar Question:
 * https://leetcode.com/discuss/interview-question/1275091/roku-coding-question-about-recursion
 * You are given an array of 4 numbers which are between 1 to 9. 
 * We want to know if it is possible to come up with a mathematical formula using 
 * these operators {+, -, *, /, open and close paranthesis ()} on those 4 numbers 
 * so that we get to number 20. The fuction should return True if it is doable and
 * False if it is not. Duplocations in the input array is possible.
 * 
 * Example1: input=[4, 1, 8, 7] target=20 output = True
 * Explanation: (7 * 4) - (1 * 8) = 20
 * Example2: input=[1,2,3,1] target = 20 output = False
 * 
 * Input: cards = [1,2,1,2]
 * Output: false
 * 
 * leetcode-question:679
 * leetcode:https://leetcode.com/problems/24-game/submissions/
 * 
 * Hint:
 * - Backtracking: DFS with backtracking
 * - we need to imagine like a TREE, we would start from cards which has 4 nums
 * - we pick first num, then we will need to pick next num (second) then apply
 * all possible operations
 * - Applying operations on first and second results in some result in an array.
 * - Now we need to pick rest of the nums from cars ( remaining two ) then 
 * call the DFS with newly built array to do the same
 */

 var judgePoint24 = function(cards) {
    let cardsInFloatValue = convertToFloat(cards);
    return dfs(cardsInFloatValue);
};

function dfs(numArray){
    
    /** return base condition */
    if(numArray.length === 1){
        /** point 1: we can compare with 0 but 0.001 being more precise */
        /** point 2: 24 is the given target value we need to compare with computed numArray */
        if(Math.abs(numArray[0] - 24) < 0.001){
            return true
        }
        return false;
    }
    
    for(let i=0; i<numArray.length; i++){
        for(let j=i+1; j<numArray.length; j++){
            
            let nextRoundArray = [];
            for(let k=0; k<numArray.length; k++){
                /** we shouldn't be checking the same num rather pick other two */
                if( k=== i || k === j) continue;

                let nextCardNum = numArray[k];
                nextRoundArray.push(nextCardNum);
            }
            
            let a = numArray[i];
            let b = numArray[j];
            let operationResultArray = applyOperations(a,b);
            
            for(let resultNum of operationResultArray){
                
                nextRoundArray.push(resultNum);
                
                /** now we have operations on first TWO card nums, we picked up next two
                remaining card nums. we will apply DFS again on them to perfrom operations */
                let result = dfs(nextRoundArray);
                if(result) return true;
                
                nextRoundArray.pop(); // <-- backtrack
            }
        }
    }
    
    return false;
}

/** convert to floating */
function convertToFloat(cards){
    return cards.map(num => Number(num.toFixed(4)));
}


/** Helper: applying ['+', '-', '*', '/'] operations on two numbers */
function applyOperations(a,b){
    
    let result = [];
    result.push(a + b);
    result.push(a - b);
    result.push(b - a);
    result.push(a * b);
    result.push(a / b);
    result.push(b / a);
    return result;
}