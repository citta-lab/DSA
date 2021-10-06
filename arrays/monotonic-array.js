


const monotonic = (array) => {

    if ( array.length === 0 || array.length === 1) return true;

    let left = 0;
    let inc = true;
    let dec = true;

    while(left <= array.length-2){

        if(array[left+1] > array[left]){
            dec = false;
        }else{
            inc = false;
        }

        left++
    }
    

    
    return inc || dec;
 
}


let array1 = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];
console.log(monotonic(array1));

// let array2 = [];
// console.log(monotonic(array2));

// let array3 = [1];
// console.log(monotonic(array3));

let array4 = [1, 3, 4, 6, 6, 5, 4];
console.log(monotonic(array4));