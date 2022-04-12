/**
 * 67. Add Binary
 * 
 * Given two binary strings a and b, return their sum as a binary string.
 * 
 * Input: a = "11", b = "1"
 * Output: "100"
 * 
 * Input: a = "1010", b = "1011"
 * Output: "10101"
 * 
 * leetcode-question:67
 * leetcode:https://leetcode.com/problems/add-binary/
 * 
 * Hint:
 * - Time: O(N+M) input a and b size 
 * - Space: O(max(n,M)) to hold the sum
 * 
 */

/** BigInt is a primitive wrapper object used to represent and manipulate 
 * primitive bigint values — which are too large to be represented by the number primitive. */


/** with using + */
var addBinary = function(a, b) {
    const binaryA = `0b${a}` // 0a1
    const binaryB = `0b${b}` // 0b11
    const sum = BigInt(binaryA) + BigInt(binaryB) // 1n + 3n 
    return sum.toString(2) // 4n.toString(2) -> 100
  };

/** without using + */
// take a = `11` and b=1
var addBinary = function(a, b) {
    const sums = [];
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
  
    while (i >= 0 || j >= 0 || carry) {
      const bitA = a[i] !== undefined ? +a[i] : 0;  // 1,1,0
      const bitB = b[j] !== undefined ? +b[j] : 0;  // 1,0,0
      const sum = bitA + bitB + carry;              // 2,2,1
  
      if (sum <= 1) {
        sums.unshift(sum);              // 3rd [1,0,0]
        carry = 0;
      }
      else if (sum === 2) {
        sums.unshift(0);                // 1st [0], 2nd [0,0]
        carry = 1;
      }
      else {
        sums.unshift(1);
        carry = 1;
      }
      i--;
      j--;
    }
    return sums.join('') // [1,0,0]
  };