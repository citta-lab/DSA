/** 
  895. Maximum Frequency Stack
  
  Design a stack-like data structure to push elements to the stack and pop the most frequent element from the stack.

  Implement the FreqStack class:

  FreqStack() constructs an empty frequency stack.
  void push(int val) pushes an integer val onto the top of the stack.
  int pop() removes and returns the most frequent element in the stack.
  If there is a tie for the most frequent element, the element closest to the stack's top is removed and returned.
  
  Input
  ["FreqStack", "push", "push", "push", "push", "push", "push", "pop", "pop", "pop", "pop"]
  [[], [5], [7], [5], [7], [4], [5], [], [], [], []]
  Output
  [null, null, null, null, null, null, null, 5, 7, 5, 4]
  
  leetcode-question:895
  leetcode:https://leetcode.com/problems/maximum-frequency-stack/
  video:https://www.youtube.com/watch?v=Z6idIicFDOE
  company:FACEBOOK

  Hint:
  - Time:O(N) and Space:O(N)
  - we will need 3 things in constructor 
  -- `this.stacks = {}` <-- map instead of an array which will group numbers by count 
  -- `this.countMap = {}` <-- keeps track of count:numbers mapping
  -- `this.maxCount = 0` <-- indicates the maximum count which helps in removing max counted number from this.stacks
  
  Example: 
  // 5 appears in 1st, 2nd and 3rd bucket as it count is 3
  this.stacks = { 
    '1': [ 5, 7, 4 ], 
    '2': [ 5, 7 ], 
    '3': [ 5 ] 
  }
  
  this.countMap = { '4': 1, '5': 3, '7': 2 }; 
  this.maxCount = 3;  <-- as 5 has 3 occurance 
 */ 

/** Time:O(N) and Space:O(N) */
var FreqStack = function() {
    /** using hash instead of an array so dont need to worry about index which will store
    numbers in group by thier count */
    this.stacks = {};
    /** indicates what is the maximum count number we have in the stacks */
    this.maxCount = 0; 
    /** hash to group numbers by count so it will help us in pop */
    this.countMap = {}
};


FreqStack.prototype.push = function(val) {
    
    /** update the counter hash */
    if(!this.countMap[val]) this.countMap[val] = 0;
    this.countMap[val] += 1
    
    let newCount = this.countMap[val]
    if(newCount > this.maxCount){
        this.maxCount = newCount;
        
        /** if we have new maxCount then we need to add new group to stacks */
        this.stacks[newCount] = [];
        
    }
    this.stacks[newCount].push(val);
    
    // console.log(this.stacks); // { '1': [ 5, 7, 4 ], '2': [ 5, 7 ], '3': [ 5 ] }
    // console.log(this.countMap); //{ '4': 1, '5': 3, '7': 2 }
    // console.log(this.maxCount); // 3
   
};


FreqStack.prototype.pop = function() {
   
    /** step 1: REMOVE TOP NUMBER : find maxCount matching numbers array from stacks and remove the last number (top)*/
    let poppedVal = this.stacks[this.maxCount].pop();
    /** step 2: UPDATE COUNT : update the count map to reflect the removal of number */
    this.countMap[poppedVal] -= 1;
    
    /** step 3: UPDATE MAXCOUNT : 
    we only need to update maxCount if we finish removing all maxCount grouped 
    numbers from the stack. 
    
    Example: { 3 : [5,4] } where removing 4 doesnt decrease the 
    maxCount 3 as 5 still has 3 as maxCount. However once both [5,4] are 
    removed we can update maxCount to 2 so we look into next 
    */
    if(!this.stacks[this.maxCount].length){
        this.maxCount -= 1
    }
    
    return poppedVal
};

/** 
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
