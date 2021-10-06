function threeNumberSum(array, targetSum) {
  array.sort((a,b) => a -b);

  const newArray = [];

  for(let i=0; i<= array.length-2; i++){


      let left = i+1;
      let right = array.length-1;

      let leftV = array[left];
      let rightV = array[right];
      let currentV = array[i];

      

      console.log(' leftV : '+leftV);
      console.log(' rightV : '+rightV);
      console.log(' currentV : '+currentV);
      

      while(left < right){
        let sum = array[left] + array[right] + array[i] ;
        console.log(' sum : '+sum);
          if(sum === targetSum){
              newArray.push([array[i], array[left], array[right]]);
              left++
              right--
          }else if (sum > targetSum){
              right--
          }else if(sum < targetSum){
              left++
          }
      }
      
  }
  
  console.log(array);
  console.log(newArray);
  
  return newArray;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;


let array = [12,3,1,2,-6,5,-8,6];
let targetSum = 0;

threeNumberSum(array, targetSum);


