/** 
 * You are given a 0-indexed binary string s and two integers minJump and maxJump. 
 * In the beginning, you are standing at index 0, which is equal to '0'. 
 * 
 * You can move from index i to index j if the following conditions are 
 * fulfilled: i + minJump <= j <= min(i + maxJump, s.length - 1), and s[j] == '0'. 
 * Return true if you can reach index s.length - 1 in s, or false otherwise.
 * 
 * Input: s = "011010", minJump = 2, maxJump = 3
 * Output : true;
 * 
 * Input: s = "01101110", minJump = 2, maxJump = 3
 * Output: false;
 */

 var canReach = function(s, minJump, maxJump) {
    return canReachHelper (0, s, minJump, maxJump);
}

const canReachHelper = (i, string, min, max) => {

    /** if we jumped after size then we didnt reach the end but crossed it */
    if(i > string.length-1) return false;
    /** if we reach end and the end value is 0 then we made it */
    if(i === string.length-1 && parseInt(string[i]) === 0) return true;
    /** if current position value is 1 then cant jump */
    if(parseInt(string[i]) === 1) return false;

    let maxBoundry = Math.min(i+max, string.length-1);
    for(j=i+min; j<= maxBoundry; j++){
        let canJump = canReachHelper(j, string, min, max);
        if(canJump) return true;
    }

    return false;
}

let data = "011010";
console.log(canReach(data, 2, 3)); // true

data = "01";
console.log(canReach(data, 1, 1)); // false

data = "01101110";
console.log(canReach(data, 2, 3)); // false


