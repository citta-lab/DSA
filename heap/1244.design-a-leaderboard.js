/** 
 * 1244. Design A Leaderboard
 * 
 * Design a Leaderboard class, which has 3 functions:
 * addScore(playerId, score): Update the leaderboard by adding score to the given player's score. 
 * If there is no player with such id in the leaderboard, add him to the leaderboard with the given
 * score.
 * 
 * top(K): Return the score sum of the top K players.
 * reset(playerId): Reset the score of the player with the given id to 0 
 * (in other words erase it from the leaderboard). 
 * 
 * It is guaranteed that the player was added to the leaderboard before calling this function.
 * Initially, the leaderboard is empty.
 * 
 * leetcode-question:1244
 * leetcode:https://leetcode.com/problems/design-a-leaderboard/
 * 
 * Hint:
 * - BruteForce ( without heap )
 * - Time: O(NlogN) and Space:O(N)
 * - Use map to store the playerId and Score 
 * - Use [...map.keys()] i.e convert object of keys to an array of keys then sort ascending
 * 
 * 
 * - Optimal ( use Heap)
 */

/**********************************************************************
 * 
 * BruteForce: O(NlogN) and O(N)
 * 
 **********************************************************************/
 var Leaderboard = function() {
    /** map will be { playerId : score } */
    this.scores = new Map(); 
};

Leaderboard.prototype.addScore = function(playerId, score) {
    if(!this.scores.has(playerId)) this.scores.set(playerId, 0);
    this.scores.set(playerId, this.scores.get(playerId) + score);
};

Leaderboard.prototype.top = function(K) {
    
  /** map.keys() returns objects of keys, spreading into an array, then sort */  
  let ids = [...this.scores.keys()]
  .sort((a,b) => this.scores.get(b) - this.scores.get(a));
    
  console.log(ids);
    
  /** picking top K elements from sorted array */  
  let sum =0;
  for(let i=0; i<K; i++){
      let id = ids[i];
      sum += this.scores.get(id);
  }
    
  return sum
};

Leaderboard.prototype.reset = function(playerId) {
    this.scores.set(playerId, 0);
};

/**********************************************************************
 * 
 * Optimal Using Max Heap: O(NlogN) and O(N)
 * Note: This does fail in 4th example in one of the sum.
 **********************************************************************/
 var Leaderboard = function() {
    /** map will be { playerId : score } */
    this.scores = new Map(); 
};

Leaderboard.prototype.addScore = function(playerId, score) {
    if(!this.scores.has(playerId)) this.scores.set(playerId, 0);
    this.scores.set(playerId, this.scores.get(playerId) + score);
};

Leaderboard.prototype.top = function(K) {
    
  /** map.keys() returns objects of keys, spreading into an array */  
  let ids = [...this.scores.keys()];
    
  let maxHeap = new Heap();
    
  ids.forEach((id, index) => {
    maxHeap.push(this.scores.get(id)); /** keep adding the score to heap */
  });
    
  console.log(maxHeap)
    
  let sum = 0;
  for(let i=0; i<K; i++){
      sum += maxHeap.poll();
  }
    
  return sum
  
};

Leaderboard.prototype.reset = function(playerId) {
    this.scores.set(playerId, 0);
};




/**** Max Heap Implementation */ 
class Heap {
    constructor(){
        this.heap = []
    }

    getParentIdx(i){
        return Math.floor((i-2/2));
    }

    getLeftChildIdx(i){
        return i*2+1;
    }

    getRightChildIdx(i){
        return i*2+2;
    }

    /** used while heapifying due to insert/delete actions */
    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    /** add elements to last of the array and then heapify to rearrange */
    push(key){
        this.heap.push(key);
        this.heapifyUp();
    }

    heapifyUp(){

        let currentIdx = this.heap.length-1;
        
        /** 
         * if current value is more than it's parent, we need to swap until current value becomes the parent
         * of all lesser child values. Hence swap and then update the current index to parent of it's current
         * index. 
         */
        while(this.heap[currentIdx] > this.heap[this.getParentIdx(currentIdx)]){
            this.swap(currentIdx, this.getParentIdx(currentIdx));
            currentIdx = this.getParentIdx(currentIdx);
        }
    }

    poll(){
        let maxElement = this.heap[0]; /** first element is always max */
        this.heap[0] = this.heap[this.heap.length-1]; /** assign last left most value to top */
        this.heap.length -- /** reduce the length as we just took one element off the array */
        this.heapifyDown(); /** readjust */
        
        return maxElement;
    }

    heapifyDown(){
        let currentIdx = 0; /** index of top element */

        /** 
         * Step 0: find if we have left child as our binary heap must have left child otherwise it is empty
         * Step 1: find biggest child between left and right
         * Step 2: swap current value with biggest value using swap and passing index
         * Step 3: update current to the latest biggest value we swapped with so we can keep checking
         */

        while(this.heap[this.getLeftChildIdx(currentIdx)]){
            let biggestChildIdx = this.getLeftChildIdx(currentIdx);

            if(this.heap[this.getRightChildIdx(currentIdx)] 
            && this.heap[this.getRightChildIdx(currentIdx)] > this.heap[this.getLeftChildIdx(currentIdx)]){
                biggestChildIdx = this.getRightChildIdx(currentIdx);
            }

            if(this.heap[currentIdx] < this.heap[biggestChildIdx]){
                this.swap(currentIdx, biggestChildIdx);
                currentIdx = biggestChildIdx;
            }else{
                return
            }

        }

    }
}