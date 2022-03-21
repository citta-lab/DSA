/** 
 * 
 * 528. Random Pick with Weight 
 * 
 * You are given a 0-indexed array of positive integers w where w[i] describes the weight 
 * of the ith index. You need to implement the function pickIndex(), which randomly picks 
 * an index in the range [0, w.length - 1] (inclusive) and returns it. The probability of 
 * picking an index i is w[i] / sum(w). 
 * 
 * 
 * Input : ["Solution","pickIndex"]
 * [[[1]],[]]
 * Output : [null,0]
 * 
 * leetcode-question:528
 * leetcode:https://leetcode.com/problems/random-pick-with-weight/
 * video: https://www.youtube.com/watch?v=v-_aEMtgnkI 
 * company: FACEBOOK
 * 
 * Hint:
 * - Time:O(N) and Space:O(N)
 * - we need to calculate preFixSums array which hold cumulative sums
 * until that point 
 * - also totalSum which we can use in finding ramdom number
 * - In pickRandom, we simply do target = totalSum * Math.random()
 * - apply binary search to find the random value's index (return right index)
 * 
 * */

 var Solution = function(w) {
    this.prefixSums = [];
    this.totalPrefixSum = 0;
    
    let sum = 0;
    for(let i=0; i<w.length; i++){
        sum += w[i];
        this.prefixSums[i] = sum;
    }
    
    /** helps in calculating random number */
    this.totalPrefixSum = sum;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
   
    /** get random value */
    let target = Math.random() * this.totalPrefixSum;
    
    /** using binary search return random value index */
    let low = 0;
    let high = this.prefixSums.length - 1;
    while (low < high) {
        let mid = Math.floor(low + ((high-low)/2));
        if(this.prefixSums[mid] <= target)
            low = mid + 1;
        else 
            high = mid;
    }
    return high;    
}