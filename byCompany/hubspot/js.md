# Hubspot 

## 1. Build curried function 
```js

function sum(a, b){
    return a + b
}

function multiply(a,b){
    return a * b
}

function curry(func){
    return function (a){
        return function (b){
            return func(a, b)
        }
    }
}

const curriedSum = curry(sum);
console.log(curriedSum(1)); // returns function(b){ return func(a,b)};
console.log(curriedSum(1)(3)); // 4

const curriedProduct = curry(multiply);
console.log(curriedSum(1)); // returns function(b){ return func(a,b)};
console.log(curriedSum(1)(3)); // 3
```

## 2. Memoization with function to add/multiply etc
```js
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
```

## 3. Add Comma to a String 
```js
/** "hello".addCommas(); */ 


String.prototype.addCommas = function(){
    return this.split('').join(',');
}

console.log("Hello".addCommas())
```

## 4. Add Reverse to String 
```js
let test = 'Adam';

/** using non prototype way */
let result = test.split('').reverse().join('');
console.log(result);

/** using prototype chain */
String.prototype.reverse = function(){
    console.log(' original string : '+this);
    return this.split('').reverse().join('');
}

console.log(test.reverse());
```

## 5. Spread vs Rest 
```js
function restExample(...args){
    let newArg = args;
    console.log(newArg);
}

function spreadExample(){
    let args = ['a','b','c','d'];
    console.log(...args);
}

restExample(1,2,3,4);
spreadExample();
```

## 6. Console with bind, call, apply
```js
console.log("Hi");

/** binding 'this' to console rather than window at declaration time */
let log = console.log.bind(this); 
log("Hi again");

/** call and apply with 'this' in console */
console.log.call(this, "Hi again"); 
console.log.apply(this, ["Hi again", "baby Z"]); 
```

