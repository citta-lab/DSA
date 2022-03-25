/** 68. Text Justification
 * 
 * Given an array of strings words and a width maxWidth, format the text such that 
 * each line has exactly maxWidth characters and is fully (left and right) justified.
 * You should pack your words in a greedy approach; that is, pack as many words as 
 * you can in each line. Pad extra spaces ' ' when necessary so that each line has 
 * exactly maxWidth characters. 
 * 
 * Extra spaces between words should be distributed as evenly as possible. 
 * If the number of spaces on a line does not divide evenly between words, 
 * the empty slots on the left will be assigned more spaces than the slots on the right.
 * 
 * For the last line of text, it should be left-justified and no extra space is 
 * inserted between words.
 * 
 * Note:
 * - A word is defined as a character sequence consisting of non-space characters only.
 * - Each word's length is guaranteed to be greater than 0 and not exceed maxWidth.
 * - The input array words contains at least one word.
 * 
 *  Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16
 * Output:
    [
    "This    is    an",
    "example  of text",
    "justification.  "
    ]
 *
 * 
 * leetcode-question:68
 * leetcode:https://leetcode.com/problems/text-justification/
 * video:https://www.youtube.com/watch?v=GqXlEbFVTXY&t=1505s
 * 
 * Hint:
 * - Time: O(lines * maxLineWidth) Space:O(lines)
 * - we need TWO POINTERS and lineLength to keep checking if we can add word to line or not
 * - In next step we need to find how many words and space left so we can use space to
 * spread with words
 * - have leftJustified and middleJustified helper
 */


    var fullJustify = function(words, maxWidth) {
    
        /** 
        Step 1: 
        find how many words and spaces we can fit in
        a line which will have max length less then maxWidth.
        
        will use TWO pointers, and keep moving right pointer 
        and add MINIMUM of 1 space after each word to a LINE
        to see whether we are still under maxWidth.
        
        CODE FLOW: 
        
        let left = 0;
        let right = left + 1;                       <-- Keep moving this
        
        let lineLength = words[left].length;        <-- as starting point
        let minSpaceRequired = right - left - 1;    <-- must need to add between words
        let nextWordLength = words[right].length;   <-- using right pointer to check next word length
        
        let canWeAddNewWordToLine = 
        lineLength + nextWordLength 
        + minSpaceRequired;                         <-- finding new lineLength size 
        
        if(canWeAddNewWordToLine < maxWidth)        <-- figuring out if we can keep adding next word
    
        */
        
        let result = [];
        
        let left = 0;
        let right = 0;
        
        while(left < words.length){
            right = left + 1;
            let lineLength = words[left].length; 
            
            /** 1.1 calculate if we can add next word and number of spaces needed */    
            while(right < words.length 
                  && (lineLength + words[right].length + (right - left - 1)) < maxWidth){
                lineLength += words[right].length; 
                right ++
            }
            
            /** 1.2 find how many spaces we need to add more to make lineLength === maxWidth */
            let diff = maxWidth - lineLength; 
            let numberOfWordsInLine = right -left;
            
            /** 1.3 figureout where to add these spaces i.e leftJustified or middleJustified */
            if(numberOfWordsInLine === 1 || right >= words.length){
                let line = leftJustified(words, diff, left, right);
                result.push(line);
            } else {
                let line = middleJustified(words, diff, left, right);
                result.push(line);
            };
            
            /** 1.4 now first line is done, we move pointers to process next words in new line */
            left = right;
            
        }
        
        return result;
        
    };
    
    function leftJustified(words, diff, left, right) {
        let spacesNeedToAddOnRight = diff - (right - left - 1);         
        
        let buildLine = [];
        buildLine.push(words[left]); // add starting word 
        
        for(let i= left+1; i < right; i++){
            buildLine.push(' ' + words[i]);
        }
        
        // now add remaining spaces to right of the words
        buildLine.push(" ".repeat(spacesNeedToAddOnRight));
        
        let resultStr = '';
        for(let wordOrSpace of buildLine){
            resultStr += wordOrSpace
        }
        
        return resultStr;
    }
        
    function middleJustified(words, diff, left, right){
        
        let spaceNeededToAddInMiddle = right - left - 1;
        
        let spaces = diff / spaceNeededToAddInMiddle; 
        let remainingExtraSpace = diff % spaceNeededToAddInMiddle; 
        
        let buildLine = [];
        buildLine.push(words[left]);
        
        for(let i= left+1; i < right; i++){
            let doIHaveRemainingExtraSpace = (remainingExtraSpace > 0) ? 1 : 0;
            let spacesToApply = spaces + doIHaveRemainingExtraSpace;
            remainingExtraSpace --;
            
            buildLine.push(" ".repeat(spacesToApply) + words[i])
        }
        
    
        let resultStr = '';
        for(let wordOrSpace of buildLine){
            resultStr += wordOrSpace
        }
        
        return resultStr;
    }