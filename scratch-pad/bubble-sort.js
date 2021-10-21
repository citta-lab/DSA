// const bubbleSort = (array) => {
//     for(let i=0; i<array.length; i++){
//         for(let j=0; j<array.length; j++){
//             if(array[j] > array[j+1]){
//                 [array[j], array[j+1]] = [array[j+1], array[j]]
//             }
//         }
//     }
//     return array;
// }


const bubbleSort = (array) => {
    let index = 0;
    let isSorted = false;
    let size = array.length;
    while(index < array.length){
        isSorted = true;
        for(let i=0; i<size; i++){
            if(array[i] > array[i+1]){
                [array[i], array[i+1]] = [array[i+1], array[i]]
                isSorted = false;
            }
        }

        if(isSorted) return array;
        size--
        index++
    }
    return array;
}

console.log(bubbleSort([4,-1,9,2,7,0]))