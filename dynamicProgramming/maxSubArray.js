

const maxSubArray = (array) => {

    let maxSubArray = array[0];
    let currentSubArray = array[0];
    let arr = [];

    for(let i=1; i<=array.length-1; i++){
        let num = array[i];
        currentSubArray = Math.max(currentSubArray+num, num);
        maxSubArray  = Math.max(maxSubArray, currentSubArray);
    }

    return maxSubArray;
}


console.log(maxSubArray([-2, 1,-3,4,-1,2,1,-5,4]))