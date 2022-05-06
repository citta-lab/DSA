/**
 *
 * 984. String Without AAA or BBB
 *
 * Given two integers a and b, return any string s such that:
 * 
 * - s has length a + b and contains exactly a 'a' letters, and exactly b 'b' letters,
 * - The substring 'aaa' does not occur in s, and
 * - The substring 'bbb' does not occur in s.
 *
 *
 * Example:
 * Input: a = 1, b = 2
 * Output: "abb"
 *
 * leetcode-question:984
 * leetcode: https://leetcode.com/problems/string-without-aaa-or-bbb/
 *
 * Hint:
 * Greedy Appraoch:
 * - we need to process char which has most value i.e b if b > a
 * - we will need counterA, counterB which we will check for creating combination
 * - we will use array to store combination
 * - array join to return string 
 */

 var strWithout3a3b = function (a, b) {
    
    /** counter for creating valid combination */
	let countA = 0;
	let countB = 0;
    
    /** result array, we will join to return string */
	const result = [];
    
    /** process only if we have valid input */
	while (a > 0 || b > 0) {
        
        /** should we start a first ? */
		if ((a >= b && countA < 2) || (countB === 2 && a > 0)) {
			result.push('a');
			countA ++;
			a --;
            
            /** reset other counter so we can  create new combination */
			countB = 0;
		} 
        
        /** should we start b first ? */
        else if ((b >= a && countB < 2) || (countA === 2 && b > 0)) {
			result.push('b');
			countB ++;
			b --;
			
            countA = 0;
		} 
        
        else {
			break;
		}
	}

	return result.join('');
};
