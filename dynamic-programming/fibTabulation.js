
/** O(n) time & O(n) space */
const fibTabulation = (n) => {
    const store = new Array(n+1).fill(0);
    store[1]= 1;

    for(let i=0; i<n; i++){
        if((i+1) <= n ) store[i+1] += store[i];
        if((i+2) <= n ) store[i+2] += store[i];
    }
    return store[n]
}


console.log(fibTabulation(5))
console.log(fibTabulation(588))