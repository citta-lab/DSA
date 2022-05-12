/**
 * Find the penalty and best time to close the store based on the input data. Input string consists
 * of customers going to shopping if it is marked as 'Y' and if they dont go then marked as 'N'. we
 * are also giving a CLOSING HOUR, now we need to determine how much is the penalty we will encounter
 * by closing. 
 * 
 * Define findPenanlty function 
 * 
 * Now we have penanlty function defined, we would like to find best closing time based on the input.
 * 
 * Example: 
 * https://leetcode.com/discuss/interview-experience/1551743/Accept-or-Stripe-Phone-screen-or-SDE-or-US-or-October-2021
 * 
 */

const findPenalty = function(data, closingHour){
    let arr = data.split(' ');

    if(!arr.length) return 0;

    let penalty = 0;

    for(let time=0; time<arr.length; time++){
        let char = arr[time];

        // Y Y N | N => here penalty would be 1 as we didnt close until after NO SHOW UP
        if(closingHour > time && char === 'N') penalty ++;

        // Y Y | Y  => here penatly would be 1 again as we closed but people showed up  
        if(closingHour <= time && char === 'Y') penalty ++;
    }

    return penalty;
}


console.log(findPenalty('Y Y Y N', 0)); // 3
console.log(findPenalty('Y Y Y N', 1)); // 2
console.log(findPenalty('Y Y Y N', 2)); // 1
console.log(findPenalty('Y Y Y N', 3)); // 0
console.log(findPenalty('Y Y Y N', 4)); // 1
console.log(findPenalty('', 1));        // 0
console.log(findPenalty('Y N Y Y N', 5)); // should be 1 ?? 

console.log("------------------------------");

const findBestClosingTime = function (data) {
    let maxProfit = 0;
    let index = 0;

    let currentProfit = 0;
    let arr = data.split(' ');
    for(let i=0; i<arr.length; i++){
        
        let value = arr[i];
        
        if(value === 'Y') currentProfit ++; 
        if(value === 'N') currentProfit --;

        if(currentProfit > maxProfit){
            maxProfit = currentProfit;
            index = i; 
        }
    }

    return index > 0 ? index + 1 : 0;
}

console.log(findBestClosingTime('Y Y Y N')); // 3
console.log(findBestClosingTime('')); // 0
console.log(findBestClosingTime('Y Y Y N Y N')); // 3
console.log(findBestClosingTime('Y Y N N')); // ????