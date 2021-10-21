/**
 * O(2^n) time as this will split each n into two nodes i.e n-1 and n-2
 * O(n) space as for the callstack ( recursion )
 */
const fib = (n) => {
    if(n === 1) return 0;
    if( n === 2) return 1;
    return fib(n-1) + fib(n-2);
}

/** 
 * O(n) time and O(n) space  
 * By adding memoization we are only letting the tree calculate one side of the leaf node.
 * O(n) space needed to store the values in the hash
 * */
const fibII = (n, hash={}) => {
    if(n === 1) return 0;
    if(n === 2) return 1;
    if(hash[n]){
        return hash[n];
    }else{
        hash[n] = fibII(n-1, hash) + fibII(n-2, hash);
    }
    return hash[n];
}

/** O(n) time to traverse all the nodes and O(1) space as we are not using any extra memory */
const fibIII = (n) => {
    let first = 0;
    let second = 1;
    let sum = 0;
    for(let i=3; i<=n; i++){
        sum = first + second ;
        first = second;
        second = sum;
    }
    return sum;
}

console.log(" ------ fib recursion O(2^n) time and O(n) space ------ ");
console.log(fib(1))
console.log(fib(5))
console.log(fib(6))
console.log(fib(7))
// 0,1,1,2,3,5,8,13

console.log(" ------ fib memoization O(n) time and O(n) space ------ ");
console.log(fibII(1))
console.log(fibII(5))
console.log(fibII(6))
console.log(fibII(7))

console.log(" ------ fib iterative O(n) time & O(1) space ------ ");
console.log(fibIII(1))
console.log(fibIII(5))
console.log(fibIII(6))
console.log(fibIII(7))