

// O(n^2) time
function maxSubArrayI(array) {
    let sum = -Infinity;
      for(let i=0; i< array.length; i++){
          let currentSum =0;
          for(let j=i; j<array.length; j++){
              currentSum = currentSum + array[j];
              sum = Math.max(sum, currentSum)
          }
      }
      return sum;
      
  }

// kadanesAlgorithm to run in O(n) rather than O(n^2)
const maxSubArray = (array) => {

    let maxSubArray = array[0];
    let currentSubArray = array[0];

    for(let i=1; i<=array.length-1; i++){
        let num = array[i];
        currentSubArray = Math.max(currentSubArray+num, num);
        maxSubArray  = Math.max(maxSubArray, currentSubArray);
    }

    return maxSubArray;
}


console.log(maxSubArray([-2, 1,-3,4,-1,2,1,-5,4]))