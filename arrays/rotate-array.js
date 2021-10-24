
/** Given an array, reverse the elements k times in place. 
 * Example: array = [1,2,3,4,5,6,7] and k is 2 then you need to move 7 to infront of the array and then 6 in the second
 * round so it would become [6,7,1,2,3,4,5]*/

// O(n) time as n elements are reversed 3 times. O(1) space
const rotate = (nums, k) => {
    let size = nums.length; 
    /** 
     * when array is small like [1,2] but roation K is 5 then we need to apply mod
     * to find the roation number. If array is always greater than k then we can use
     * k directly */
    let rotationCal = k % size; 

    /** take an example of [1,2,3,4,5,6,7] and k = 2 and answer should be [6,7, 1,2,3,4,5] */
    reverse(nums, 0, size-1); // we reverse all elements so it will become [7,6,5,4,3,2,1]
    reverse(nums, 0, rotationCal-1); // we reverse elements upto k'th position so it will be [6,7,5,4,3,2,1]
    reverse(nums, rotationCal, size-1); // we reverse from kth to end so it will be [6,7,1,2,3,4,5]

    // answer will be [6,7,1,2,3,4,5]
    return nums;
}

const reverse = (array, start, end) => {
    while(start < end){
        [array[start], array[end]] = [array[end], array[start]];
        start++
        end--
    }
}

console.log(rotate([1,2], 5)); // [2,1]
console.log(rotate([1,2], 2)); // [1,2]
console.log(rotate([1,2,3,4,5,6,7], 2)); // [6,7,1,2,3,4,5]



/** 
 * Below method will fail with time limit when the size of an array is large example if the array is 
 * of size 100000 and k is around 59444 rotations */
var rotateIII = function(nums, k) {
    let size = nums.length; 
    let newArrayEnd = size - ( k % size );
    console.log(newArrayEnd);
    
    
    while(size > newArrayEnd){
      let num = nums.pop();
      nums.unshift(num)
      size--
    }
    
    return nums
};

