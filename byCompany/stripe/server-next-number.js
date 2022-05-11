/**
 * 
 * You're running a pool of servers where the servers are numbered sequentially starting from 1.
 * Over time, any given server might explode, in which case its server number is made available 
 * for reuse. When a new server is launched, it should be given the lowest available number.
 * 
 * Write a function which, given the list of currently allocated server numbers, 
 * returns the number of the next server to allocate. In addition, 
 * you should demonstrate your approach to testing that your function is correct. 
 * You may choose to use an existing testing library for your language if you choose, 
 * or you may write your own process if you prefer.
 * 
 * For example, your function should behave something like the following:
 *  >> next_server_number([5, 3, 1])
#   2
#   >> next_server_number([5, 4, 1, 2])
#   3
#   >> next_server_number([3, 2, 1])
#   4
#   >> next_server_number([2, 3])
#   1
#   >> next_server_number([])
#   1
#   >> next_server_number([1,1.5,2,2.5,3,3.5,4,5,5.5])
#   6
#   >> next_server_number([2.5])
*/

var next_server_number = function(nums) {
    
    /** we ignore any values less than or equal to zero */
    nums = nums.filter((a) => a > 0);
    
    /** sort them so we can check from left to right */
    nums.sort((a,b) => a-b)
    
    /** remove duplicates */
    //let numsSet = new Set(nums)

    /** 40 - 45 is to hanle when floating number is used */ 
    let numsSet = new Set();
    for(let num of nums){
        let int = Math.floor(num);
        numsSet.add(int)
    }
    
    let i = 1;
    for(let num of numsSet){
        /** if our i and num doesnt match then we found the missing */
        if(i !== num) return i;
        i++
    }
    
    /** we didnt find missing and now i===nums.length anyway */
    return i
};


console.log(next_server_number([5, 3, 1])); // 2
console.log(next_server_number([5, 4, 1, 2])); // 3
console.log(next_server_number([3, 2, 1])); // 4
console.log(next_server_number([2, 3])); // 1
console.log(next_server_number([])); // 1

console.log(next_server_number([1,1.5,2,2.5,3,3.5,4,5,5.5])); // 6
console.log(next_server_number([1,1,2,2,3,5,4,5,5])); // 6