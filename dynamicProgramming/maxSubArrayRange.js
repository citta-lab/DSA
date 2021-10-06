const maxSubArrayRange = (array) => {

    let currentSum = 0;
    let maxSum = -Infinity;

    let start = 0;
    let end = 0;
    for(let i=0; i <= array.length-1; i++){

        let num = array[i];

        

        //currentSum = Math.max(num, currentSum+num);
        if(num > currentSum + num){ /** if adding num to currerntSum still less than num then we ignore previous currentSum to start fresh*/
            currentSum = num;
            start = i;
            end = i; 
        }else{
            currentSum = currentSum + num;
        }


        if(currentSum > maxSum) {
            maxSum = currentSum;
            end = i; /** this defines our currentSum is truely increasing  */
        }

        if(currentSum < 0){
            currentSum = 0;
            start = i+1;
        }


    }

    console.log(start);
    console.log(end);
    console.log('maxSum : '+maxSum);


}

//console.log(maxSubArrayRange([-2, 1,-3,4,-1,2,1,-5,4]))
//console.log(maxSubArrayRange([4,5,6]));
//console.log(maxSubArrayRange([4,-5,6]));
//console.log(maxSubArrayRange([4,-1,2,-1,6]));
//console.log(maxSubArrayRange([4,-1]));
//console.log(maxSubArrayRange([-2, -1,-3,-14,-1,-2,-1,-5,-4]))  /** should be -1 and 1,1 */
//console.log(maxSubArrayRange([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4 ])) /** 3,13 range and 19 max */
//console.log(maxSubArrayRange([-2, -1,-3,-14,-1,-2,-1,-5,-4])) 
console.log(maxSubArrayRange([-2, -1,-3])) 