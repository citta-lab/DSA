/** 
 * 
 * 273. Integer to English Words  
 * 
 * Convert a non-negative integer num to its English words representation.
 * 
 * Input: num = 123
 * Output: "One Hundred Twenty Three"
 * 
 * Input: num = 12345
 * Output: "Twelve Thousand Three Hundred Forty Five"
 * 
 * Input: num = 1234567
 * Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 * 
 * leetcode-question:273
 * leetcode:https://leetcode.com/problems/integer-to-english-words/
 * 
 * Hint:
 * - Time:O(n) and Space:O(1) 
 * - Divide and Conquer. Divide big number into hundreds, tens and value less than 20
 * - Use helper function to get hundreds string
 * - Not worth practicing <--- *IMP*
 * */

/** Time: O(N) and Space:O(1) */
const lessThanTwenty = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
];

const tens  = [
    '', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'
];

const thousands = [
'', 'Thousand', 'Million', 'Billion'
];

var numberToWords = function(num) {

if(num === 0) return "Zero";

let resultStr = '';
let index = 0;

// let num = 12345
while(num){
    
    /** see if we can have chuncks in hundreds */
    let chunksInHundred = num % 1000;                       // 345  // round #2: 12   
    num = Math.floor(num / 1000);                           // 12   // round #2: 0
    let numParts = getInHundreds(chunksInHundred).trim();   // 'Three Hundred Forty Five'
    
    if(chunksInHundred !== 0){                              // 'Three Hundred Forty Five '
        resultStr = numParts + 
                    ' ' + thousands[index] +
                    ' ' + resultStr;
    }
    
    index++
}

return resultStr.trim();

};



function getInHundreds (num) {
  // nums between 1 - 20
if(num < 20){
    return lessThanTwenty[num];
}else if (num < 100){
    // nums between 1 - 99
    return tens[Math.floor(num/10)] + ' ' + getInHundreds(num % 10);
}else{
    // nums between 100 - 999
    return lessThanTwenty[Math.floor(num/100)] + ' Hundred ' + getInHundreds(num % 100);
}
}