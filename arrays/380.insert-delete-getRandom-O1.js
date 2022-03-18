/** 
 * 
 * 380. Insert Delete GetRandom O(1) 
 * 
 * Implement the RandomizedSet class: 
 * 
 * RandomizedSet() Initializes the RandomizedSet object.
 * - bool insert(int val) Inserts an item val into the set if not present. Returns true if the item was not present, false otherwise.
 * - bool remove(int val) Removes an item val from the set if present. Returns true if the item was present, false otherwise.
 * - int getRandom() Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). 
 * Each element must have the same probability of being returned.
 * 
 * You must implement the functions of the class such that each function works in average O(1) time complexity.
 * 
 * Input : ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"]
 * [[], [1], [2], [2], [], [1], [2], []]
 * Output :[null, true, false, true, 2, true, false, 2]
 * 
 * leetcode-question:380
 * leetcode:https://leetcode.com/problems/insert-delete-getrandom-o1/
 * 
 * Hint:
 * - Time:O(1) and Space:O(n)
 * - HashMap can be used for delete and insert at O(1)
 * - HashMap DOESNT have index for random. So we will need to convert it to array i.e O(N) 
 * - Array does random index lookup at O(1)
 * - Array doesnt do good job in insert and delete with O(1)
 * - COMBINATION of ARRAY and MAP used with SWAP.
 * - IMP: DELETE
 * -- hashmap loopup: we get index for interested value from hashMap
 * -- array lookup: based on index from hashmap we call swap 
 * -- swap: swap will do swapping between interested index and last item of array
 * -- array pop: we pop last element from array
 * -- hashmap: we delete value from hashmap
 * 
 */

 class RandomizedSet {
    constructor() {
      this.map = new Map();
      this.list = [];
    }
  
    insert(val) {
      /** add val to map and push to array */
      if (this.map.has(val)) return false;
      this.map.set(val, this.list.length);
      this.list.push(val);
      return true;
    }
  
    remove(val) {
      /** if we dont have val in map then we return */
      if (!this.map.has(val)) return false;
        
      /** we might have val, so will get index from map and swap in array */  
      const idx = this.map.get(val);
      this._swap(idx, this.list.length - 1);
      this.list.pop();
      this.map.set(this.list[idx], idx);
      this.map.delete(val);
      return true;
    }
  
    getRandom() {
      return this.list[Math.floor(Math.random() * this.list.length)];
    }
  
    /** used to swap interested value to tail end of array using swap so
    we can just pop the last element */
      
    _swap(a, b) {
      const tmp = this.list[a];
      this.list[a] = this.list[b];
      this.list[b] = tmp;
    }
  }