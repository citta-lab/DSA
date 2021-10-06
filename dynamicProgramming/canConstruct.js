
/** this will add O(n^m * m) where second m for slicing 
 * O(m*m) first m for stack and second m is for storing the slice content in each recursion 
 */
const canConstruct = (string, array) => {
    if(string === '') return true;
    
    for(let word of array){
        // check if the word is prefixed with same letters as string
        if(string.indexOf(word) === 0) {
            let subString = string.slice(word.length); // this is copying over which will add m times 
            return canConstruct(subString, array);
        }
    }

    return false;
}


console.log(canConstruct('mahesh', ['ma', 'he', 'mahs']));
console.log(canConstruct('mahesh', ['ma', 'he', 'h', 's']));
console.log(canConstruct('ssssssssssssssssssssssssssse', ['sssssss', 'ssss', 's', 's']));

/** O(n*m*m) time 
 * O(m*m)
 */
const canConstructMemo = (string, array, memo={}) => {
    if (memo[string]) return memo[string];
    if(string === '') return true;
    
    for(let word of array){
        // check if the word is prefixed with same letters as string
        if(string.indexOf(word) === 0) {
            let subString = string.slice(word.length); // this is copying over which will add m times 
            memo[string] = canConstructMemo(subString, array, memo);
            return memo[string];
        }
    }

    memo[string] = false;
    return false;
}

console.log(canConstructMemo('mahesh', ['ma', 'he', 'mahs']));
console.log(canConstructMemo('mahesh', ['ma', 'he', 'h', 's']));
console.log(canConstructMemo('ssssssssssssssssssssssssssse', ['sssssss', 'ssss', 's', 's']));


