

/**
 * Every ad shown on Twitch has a unique integer ad_id, starting at 0, 1, 2, 3...
 * Each user on Twitch has an array of ad_ids that they have seen, in the order that they 
 * viewed them (unsorted, can have duplicates).
 * 
 * The product team has requested that we update the algorithm that decides which ad to 
 * show to a user. They would like to always show the lowest ad_id that the user has NOT 
 * already seen. Write a function that, given the user's array of seen ad_ids, returns 
 * the correct ad_id. Assume valid input.
 * 
 * Examples:
 * [6,2,1,4,0] = return 3
 * [2,5,3] = return 0
 * [] = return 0
 * 
 * 
 * https://leetcode.com/company/twitch/discuss/1831875/Twitch-or-Senior-SWE-or-Phone-Screen-or-2022-or-Counting-Sort-Problem
 * Similar to : 041.first missing postive
 * /

/** Time:O(N) and Space:O(N) */
function findMin(arr){

    if(!arr || !arr.length) return 0;

   let max = Math.max(...arr);
   // console.log(max);

   let set = new Set([...arr]);
   // console.log(set);

   for(let i=0; i<=max; i++){
       if(!set.has(i)) return i;
   }

   return max+1;
}

/** Time:O(N) and Space:O(N) ( without using Set but only Array ) */
function findMinWihtoutSet(arr){

    if(!arr || !arr.length) return 0;

    let refArr = new Array(arr.length+1).fill(false);

    for(let num of arr ){
        if(num > refArr.length){
            continue
        }

        refArr[num] = true;
    }

    for(let [index, value] of Object.entries(refArr)){
        if(!value) return index;
    }
}




let arrOne = [6,2,1,1,4,0]
let minPostive = findMin(arrOne);
let minPostiveII = findMinWihtoutSet(arrOne);
console.log(minPostive); // 3
console.log(minPostiveII); // 3

arrOne = [2,5,3]
minPostive = findMin(arrOne);
minPostiveII = findMinWihtoutSet(arrOne);
console.log(minPostive); // 3
console.log(minPostiveII); // 3

arrOne = []
minPostive = findMin(arrOne);
minPostiveII = findMinWihtoutSet(arrOne);
console.log(minPostive); // 0
console.log(minPostiveII); // 3
