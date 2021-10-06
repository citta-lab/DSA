const zeroArray = array => {

    
    let zeroCount = 0;
    let zeroIdx = -1;

    for(let i=0; i<= array.length-1; i++){
        if(array[i] === 0){
            zeroIdx = i;
            zeroCount++;
        }

        while()

        // [1, 2, 0, 0, 3]
       1 // count = 0   1-> 1   count = 1
       2 // count = 1   2-> 2    count = 2
       0 // count = 2           count = 2
       0// count = 2            count = 2
       3 //count = 2    array[count=2]=array[i] 3   3



    }


    return array;
}


let array1 = [1,9,8,4,0,0,2,7,0,6,0];  // 1,9,8,4,2,7,6,0,0,0,0
console.log(zeroArray(array1));

let array2 = [1,2,0,0,0,3,6];
console.log(zeroArray(array2));