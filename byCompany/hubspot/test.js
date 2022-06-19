let sum = (a,b) => a + b; 

let memoize = function (fn) {
    let cache = {};
    return function(...args){
        let hash = args.join('-');
        if(cache[hash]) return cache[hash];

        console.log(' cache miss, calculating ...')
        let calculateFnVal = fn(...args);
        cache[hash] = calculateFnVal;
        return calculateFnVal;
    }
}

let memoized = memoize(sum);
let result = memoized(2,3);
console.log(result);

result = memoized(12,4);
console.log(result);

sum = (a,b,c,d) => a + b +c +d; 
memoized = memoize(sum);
result = memoized(2,3,4,5);
console.log(result);


let multiply = (a,b) => a*b;
memoized = memoize(multiply);
result = memoized(12,4);
console.log(result);

result = memoized(12,4);
console.log(result);
