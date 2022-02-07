/** 

  27. Remove Element

  Given an array and a value, remove all instances of that value in-place and return the new length.
  
  leetcode: https://leetcode.com/problems/remove-element/
  leetcode-question:27
  
  Input: numbers = [1,5,7,5,9,10] value = 5
  Output: 4 ( index ) i.e numbers = [1,7,9,10] 
  
  */

  function removeElement(numbers, target) {
   let slow = 0;
   for(let fast =0; fast < numbers.length; fast ++){
      /** we need to push number which are not eual to target to begining of the array */
      if(numbers[fast] !== target){
         numbers[slow] = numbers[fast];  // [1,7,9,10]
         slow ++
      }
   }
    
   return slow; // points 10th index 
  }

let numbers = [1,5,7,5,9,10] 
let value = 5
console.log(removeElement(numbers, target)); // 4
