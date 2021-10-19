/** Given a string reverse the string and return the reversed string */

/** O(n) time and O(n) space */
const reverse = (stringValue) => {
  const newArray = [];
  const arr = stringValue.split(''); //O(n) time

  //O(n) time
  for(let l of arr ){
    newArray.unshift(l); //O(n) space
  }

  //O(n) time
  return newArray.join('');

}

console.log(reverse('hello'));
console.log(reverse('hello'));


/** O(n) time but O(n) space */
const reverseII = (stringValue) => { 
 let size = stringValue.length-1;
 let newString = ''; // o(n) space
 while(size >= 0){ // o(n) time
   newString = newString + stringValue[size];
   size --
 }

 return newString
}

console.log(reverseII('hello'));
console.log(reverseII('bob'));

/** O(n) time but O(1) space */
const reverseIII = (stringValue) => { 
  const arr = stringValue.split(''); // O(n) time
  
  let left = 0;
  let right = arr.length-1;

   // O(n) time
  while(left <= right) {
    [arr[left], arr[right]] = [arr[right], arr[left]]
    left++;
    right--
  }

  return arr.join('');  // O(n) time
}

console.log(reverseIII('hello'));
console.log(reverseIII('bob'));

