# Strings 

## 1. Count Repeated Char 
If the given string has multiple repeated character then we would like to count number of times it is repeated from given index. 
Example : 
`"heeeelloo"` we need to have `h:1, e:4, l:2, o:2`. if someone asks to find repeated character at `index 1` i.e (e) then we 
should return `4`.

:shipit: sliding window / two pointers.

```js
let s = "heeeelloo"
const getRepeated = (s, index) => {
   let left = index;
   let right = index;
   /** we count from given index (left stays at the start) and 
   we slide right pointer until left & right char are the same */
   while(right < s.length && left <= right && s[left] === s[right]) {
     right ++
   }
   
   return right - left;
}

console.log(getRepeated(s,1)); // 4 for e 
console.log(getRepeated(s,0)); // 1 for h
console.log(getRepeated(s,5)); // 2 for l
```
