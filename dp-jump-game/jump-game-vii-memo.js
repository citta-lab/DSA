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
    return canReachHelper (0, s, minJump, maxJump, store={});
}

const canReachHelper = (i, s, min, max, store) => {

    if(store[i] !== undefined) return store[i];

    // we have crossed the line
    if(i > s.length-1) return false;
    
    // we reached end and it is still O so we are good
    if(i === s.length-1 && parseInt(s[i]) === 0) return true;

    // if the current position is 1, then cant jump
    if(parseInt(s[i]) === 1) return false;

    for(let j= i+min; j <= i+max; j++){
        let canJump = canReachHelper(j, s, min, max, store);
        if(canJump){
            store[j] = canJump;
            return store[j];
        }
    }

    store[i] = false;
    return false;
}



let data = "011010";
console.log(canReach(data, 2, 3)); // true

data = "01";
console.log(canReach(data, 1, 1)); // false

data = "01101110";
console.log(canReach(data, 2, 3)); // false