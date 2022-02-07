/** 

  27. Remove Element

  Given an array and a value, remove all instances of that value in-place and return the new length.
  
  Since it is impossible to change the length of the array in some languages, you must instead have 
  the result be placed in the first part of the array nums. More formally, if there are k elements after 
  removing the duplicates, then the first k elements of nums should hold the final result. 
  It does not matter what you leave beyond the first k elements. 
  
  Return k after placing the final result in the first k slots of nums.

  Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
  
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
