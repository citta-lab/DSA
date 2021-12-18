
// fib(n): 1,1,2,3,5,8

/** n'th fib number */
const fib = (n, memo={}) => {
    
    if(memo[n]) return memo[n];

    if(n === 0 || n === 1) return 1;

    memo[n] = fib(n-1, memo) + fib(n-2, memo);

    return memo[n];
}

console.log(fib(1));
console.log(fib(0));
console.log(fib(2));
console.log(fib(50));