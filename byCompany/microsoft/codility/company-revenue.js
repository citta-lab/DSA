/**  Need to relocate the -ve number such that the sum is not -ve */

function relcoate(arr){
    let count = 0;
    let minPriority = new Priority();

    let sum = 0;

    for(let a of arr){
        let value = arr[a];
        sum += value;

        if(value < 0){
            minPriority(value);
        }

        if(sum < 0){
            let min = 
            sum += minPriority.pop() * -1;
            count++
        }
    }

    count;
}

let queue = [];
function minPriority(value){
    queue.push(value);
    return queue.sort((a,b) => a - b);
}