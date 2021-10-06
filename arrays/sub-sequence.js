const validateSubSequennce = (array, subsequemce) => {
   let subIdx = 0;
   array.forEach((ele) => {
       
        if(subIdx > subsequemce.length) return false;
        
       if(subsequemce[subIdx] === ele){
            subIdx++
        }
   });

//    if(subIdx === subsequemce.length) return true
//    if(subIdx < subsequemce.length) return false
  return subIdx === subsequemce.length;
}


/* TESTING */
// console.log(validateSubSequennce([1,2,3,4,5,6], [3,4,5])); 
console.log(validateSubSequennce([1,2,3,4,5,6], [1,2,3,4,5,6,7])); 