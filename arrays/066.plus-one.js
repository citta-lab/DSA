/** 
 * 66. Plus One 
 * 
 * You are given a large integer represented as an integer array digits, 
 * where each digits[i] is the ith digit of the integer. 
 * The digits are ordered from most significant to least significant in left-to-right order. 
 * The large integer does not contain any leading 0's.
 * 
 * Increment the large integer by one and return the resulting array of digits.
 * 
 * Input: digits = [1,2,3]
 * Output: [1,2,4]
 * 
 * Input: digits = [9]
 * Output: [1,0]
 * 
 * Input: digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3] <-- More than size javascript allowed i.e 2^53
 * Output: [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]
 * 
 * 
 * Questions:
 * - will it have any negative numbers ? ( should be no )
 * - is the sum suppose to be 123 + 1 = 124 or adding +1 to last digit ? ( first option)
 * - do we forsee number greater than 2^53 ( maximum safe integer i ) ? 
 * ( then we cant add any number more than 2^53 )
 * */

/** Time:O(n) and Space:O(n) if we have to create/unshift due to example like [9,9] */
var plusOne = function(digits) {
    
    for(let i= digits.length-1; i>= 0; i--) {
        let num = digits[i];
        
        /** if num is 9 */
        if(num === 9){
            digits[i] = 0;
            continue;
        }else{
            /** we would have marked all 9's as zero, 
                then we need to add 1 to previous number. Also 
                if the num is not 9 then we simply add 1 to 
                num to make it 124 from 123. */
            
            let newNum = num + 1;
            digits[i] = newNum;
            return digits; 
        }   
    }
    
    /** 
    if we have example like [0] or [9,9,9] then we need to return [1] 
    which needs new Array with n+1 size
    */
    digits.unshift(1); // adds like [1] or [1,0,0,0]
    
    return digits;
};

let digits = [1,2,3];
console.log(plusOne(digits)); // [1,2,4]

digits = [1];
console.log(plusOne(digits)); // [2]

digits = [0];
console.log(plusOne(digits)); // [1] 

digits = [9];
console.log(plusOne(digits)); // [1,0] <-- O(N) space as we unshifted 

digits = [1,8,9];
console.log(plusOne(digits)); // [1,9,0]

digits = [9,9];
console.log(plusOne(digits)); // [1,0,0] <-- O(N) space as we unshifted 

digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]; 
console.log(plusOne(digits));//[6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7,0, 5, 5, 4, 4]