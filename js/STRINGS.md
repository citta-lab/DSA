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

## 2. Compare Two Strings & Ignore Repeated Char.
IF we are given two strings which needs to be compared if they are the same by IGNORING any repeated characters. 
Example:
If the first string is `heeellooo` and second string is `hello` or `helo` we would like to say its the same string.
If the second string is `helow` then we need to say it's not the same as `heeellooo` doesnt have char `w` from `helow`.

:shipit: sliding window / two pointers.

```js
const areTheySame = (first, second) => {
   let firstIndex = 0;
   let secondIndex = 0;

   while(firstIndex < first.length && secondIndex < second.length){
      let firstCharsCount = getRepeated(first, firstIndex);
      let secondCharsCount = getRepeated(second, secondIndex);

      if(firstCharsCount != secondCharsCount && first[firstCharsCount] != second[secondCharsCount]){
         return false;
       }

       firstIndex += firstCharsCount;
       secondIndex += secondCharsCount;
   }

   return firstIndex === first.length && secondIndex === second.length;
}

const getRepeated = (s , index) => {
   let left = index;
   let right = index;
   while( right < s.length && s[left] === s[right] && left <= right){
      right++
   }
   
   return right - left
}

console.log(areTheySame('heeellooo', 'hello')); // true
console.log(areTheySame('heeellooo', 'helo'));  // true
console.log(areTheySame('heeellooo', 'hillo')); // false
```

## BIT Conversion 

The most easy way to convert any number to corresponding bit value is by doing 
```js
/** syntax : (num).toString(2); */
(10).toString(2); // 1010
```

## Longest repeated char 
The idea here is to pick the first word from an array and then compare rest of the words by char by char.
```js
let strs = ["flower","flow","flight"];

function repeat(strs){
   let firstWord = strs[0];

   /** now we compare each char from first word to rest of the word char by char */
   for(let i=0; i<firstWord.length; i++){
      let char = firstWord[i]; // f,

      for(let j=1; j<strs.length; j++){
         /** compares 'f' against first char of 'flow' and then 'flight', then 
          * we pick up l from firstWord and compare againt second char of 'flow' and then 'flight' this keep repeating */
         if(char !== strs[j].chatAt(i)){
            return firstWord.substring(0, i);
         }
      }
   }

   /** if we didnt fail then we have firstWord as longest*/
   return firstWord;
}

```



