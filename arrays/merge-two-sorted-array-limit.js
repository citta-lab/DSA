function sortArray(arr1, arr2, limit){
  
    if(!arr1.length) return arr2.slice(0, limit);
    if(!arr2.length) return arr1.slice(0, limit);
   
    
    let result = [];
    
    let arr1Pointer = 0;
    let arr2Pointer = 0;
    while(arr1Pointer < arr1.length && arr2Pointer < arr2.length && result.length){
      
        let first = arr1[arr1Pointer];
        let second = arr2[arr2Pointer]
        
        if(first <= second){
          result.push(first);
          arr1Pointer++
        } else {
          result.push(second);
          arr2Pointer ++
        }
    }
    
    
    while(arr1Pointer < arr1.length ){
       result.push(arr1[arr1Pointer]);
       arr1Pointer++
    }
    
      while(arr2Pointer < arr2.length ){
       result.push(arr2[arr2Pointer]);
       arr2Pointer++
    }
    
    
    
    return result.slice(0, limit);
  }
  
  
  let a = [1, 3, 5]
  let b = [2, 6, 8, 9]
  console.log(sortArray(a, b, 7))