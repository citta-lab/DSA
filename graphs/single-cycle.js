/**
 * Given an array can you find if the array is "single" cyclic. The important thing to remmber here is to know
 * we need to return true/false only if it is only one cycle. 
 * 
 * Each value of the array represents the number of item it can jump, will have negative value which we will have to
 * traverse back.
 */

 /** O(n) space and O(1) time */
 const isSingleCycle = (array) => {

    /** STEP 1: need to keep counting how many elements in the array we visited */
    let visited = 0;
    let currentIdx = 0; 

    /** we should only worry if visted count is less than given array length */
    while(visited < array.length){
        /** 1st Boundry : 
         *  If we go back to idx = 0 before traversing all array then we might 
         *  have more than one cycle plus some remainder .
         *  
         *  Example: [2,1,-2,4] where 2 will jump to -2 position and 
         *  -2 will jump back to index 0 (i.e 2 value) before visting
         *  all elements of an array. ( 4 is left )
         * */

         if(visited > currentIdx && currentIdx === 0) return false;

         /** if we didnt go back then we can keep counting and jump */
         visited += 1;
         currentIdx = jump(array, currentIdx);
    }

    /** if it one complete cycle then we must be at the starting point after jumping all elements */
    return currentIdx === 0;


 }

 const jump = (array, idx) => {
    let jumpValue = array[idx];
    /** 
     * 2nd Boundry:
     * this will help in preventing going out of array bound yet keep jumping with in the array 
     * Example: [ 2, 1, 1, 34, 2] where second jump value 34 will have to be with in the array. By doing
     * modules we can get (3 + 34) % 5 = 2 without worrying out going beyond the array size
     * */
    nextJump = (idx + jumpValue) % array.length;
    /**
     * 3rd Boundry:
     * array.length + nextJump prevents going out of boundry due to -ve value. 
     * Example: [1, -3, 4, 1] where -3 suppose to count back and put the pointer in 4th element index.
     * In reality it will throw out of bound exception so 5-3 = 2 will give the index (4th value) without
     * pulling our hair.
     */
    return nextJump >= 0 ? nextJump : array.length + nextJump; // should be >= 
 }


 console.log(isSingleCycle([2,2,-1])); // true
 console.log(isSingleCycle([1,2,3,4,-2,3,7,8])); //false
 console.log(isSingleCycle([ 2, 3, 1, -4, -4, 2 ])); // true


 const isSingleCycleTwo = (array) => {

    let visited = 0;
    let currentIdx = 0;

    let track = new Array(array.length).fill(0); // O(n) space 
    while(currentIdx < array.length){
        
        if(track[currentIdx] === 1 && currentIdx != 0) return false;
        if(track[currentIdx] === 1 && currentIdx === 0 && visited === array.length) return true;

        track[currentIdx] = 1;
        visited += 1;

        currentIdx = jumpTwo(array, currentIdx);
    }

    console.log(currentIdx)
    return currentIdx === 0;
 }

 const jumpTwo = (array, idx) => {
    let jumpValue = array[idx];
    let nextIdx = (idx + jumpValue) % array.length; 
    return nextIdx >= 0 ? nextIdx : array.length + nextIdx;
 }

console.log(isSingleCycleTwo([2,2,-1])); // true
console.log(isSingleCycleTwo([1,-1])); // true
console.log(isSingleCycleTwo([1,2,3,4,-2,3,7,8])); //false
console.log(isSingleCycleTwo([ 2, 3, 1, -4, -4, 2 ])); // true
console.log(isSingleCycleTwo([ 1, -1, 1, -1 ])); // false
console.log(isSingleCycleTwo([0,1])) // false <--- need to address why its printing true

 