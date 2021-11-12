
// O(n*m) time and O(m) space 
const gridTravellerTabulation = (m, n) => {

    // build two dimentional array
    const store = new Array(m+1)
    .fill()
    .map(() => new Array(n+1).fill(0))

    // base condition : The possible way of traversing 1*1 array is 1
    store[1][1] = 1

    //loop m*n and move down and right, then add current value to down and right element space
    for(let i=0; i<= m; i++){
        for(let j=0; j<=n; j++){
            // right move 
            if(j + 1 <= n) store[i][j+1] = store[i][j+1] + store[i][j];
            // down move 
            if(i + 1 <= m) store[i+1][j] = store[i+1][j] + store[i][j]; 
        }
    }

    console.log(store);
    return store[m][n]
}

console.log(gridTravellerTabulation(3,3))