# ARRAYS

## Mutate Array
### Remove Item from an Array
```js
/** Remove and Insert element to particular index in an Array */
let names = ['bob', 'matt', 'adam', 'rob', 'james'];

let robsIndex = 3;
/** .splice(indexValueToRemove, numberOfItemToRemove) */
let removeRob = names.splice(robsIndex, 1); 
console.log(removeRob); // ['rob']
console.log(names); // ['bob', 'matt', 'adam', 'james']
```

### Insert Item to an Array
```js
let names = ['bob', 'matt', 'adam', 'james'];

/** .splice(indexValueToAdd, numberOfItemToRemove, valueToAdd) */
let addRob = names.splice(robsIndex, 0, removeRob[0]); 
console.log(names); // ['bob', 'matt', 'adam', 'rob', 'james']
```

## Array Sort 
### With Tuples like `[x,y,value]`:
Given an array tuples / arrays we would like to sort them by third value `i.e value` in our example `[x,y,value]`. 
```js
let arr = [[2,3,1], [2,3,0], [4,2,6], [5,8,2], [2,2,2]];
let sortedArr = arr.sort((first, second) => first[2]-second[2]);
console.log(sortedArr); // [[2,3,0],[2,3,1],[5,8,2],[2,2,2],[4,2,6]];
```

### Sort by `[last, second, first]`:
If we would like to sort the array by last element, then by next previous element and then the first so our result from above example would look like `[[2,3,0],[2,3,1],[2,2,2],[5,8,2],[4,2,6]]`. i.e `[2,2,2]` come before `[5,8,2].
```js
let arr = [[2,3,1], [2,3,0], [4,2,6], [5,8,2], [2,2,2]];
let sortedArr = arr.sort((a,b) => a[1]-b[1]).sort((x,y) => x[2]-y[2]);
console.log(sortedArr); // [[2,3,0],[2,3,1],[2,2,2],[5,8,2],[4,2,6]];
```

## Initialize M*N array
### Initialize Array with Zero's 
```js
/** Build m*n empty array with initial value 0 */
let size = 5;
let arr = new Array(size).fill(0)
.map(row => new Array(size).fill(0)); 
```

### Initialize Array to HOLD diagonal values
This particular scenario is needed if we want to traverse the m * n array via zigzag. Then 
we initialize the result array with row+col-1 size to store all diagonal values. Example: 
3 * 3 array we will have result with size 5.
```js
let rows = matrix.length;
let cols = matrix[0].length;
let arr = new Array(rows+cols-1).fill(null)
.map(() => []); // [ [], [], [], [], [] ]
```

## Matrix (M*N) Co-ordinates 
Imagine we are given a matrix of m X n size and we would like to traverse the matrix from one cell to another cell using left, right, up and down directions and/or with four more added directions diagonally 
```js
[1,1,0]
[0,1,0]
[0,1,1]
```
### Build 4 directional co-ordinates 
```js
const DIR = [[1,0],[-1,0],[0,1],[0,-1]];
const getChildren = (row, col, grid) => {
    
    const result = [];
    
    for(let i=0; i<DIR.length; i++){
        const newRow = row + DIR[i][0];
        const newCol = col + DIR[i][1];

        /** skip out of bound row/col */
        const inBoundRow = newRow >= 0 && newRow < gird.length;
        const inBoundCol = newCol >= 0 && newCol < grid[0].length;
        if(!inBoundRow || !inBoundCol){
            continue;
        }

        /** any other condition like only go empty cell ( ex: 1 is empty ) etc */
        if(grid[newRow][newCol] !== 1){
            continue;
        }

        /** mark processed node as visited here or calling function where getChildren is called*/
        grid[newRow][newCol] = 1;

        result.push([newRow, newCol]);
    }

    return result;
}
```

### Build 8 directional co-ordinates
If we need to traverse in 8 direction then we would update the directions array
```js
const DIR = [
    [1,0],[-1,0],[0,1],[0,-1],
    [1,1],[-1,1],[-1,-1],[1,-1]    
];

const getChildren = (row, col, grid) => {
    .....
    ....
    /** same as above */
    ...
}
```