
/** O(n^m*m) time where second m is for slice 
 * O(m*m) space first m for stack and sencond for slice values 
 */
const countConstruct = (targert, words) => {
    if(targert === '') return 1;
    
    let count = 0;
    for(let word of words) {
        if(targert.indexOf(word) === 0){ // indicates prefix found
            let subString = targert.slice(word.length);
            let result = countConstruct(subString, words);
            count  = count + result;
        }
    }

    return count;
}


console.log(countConstruct('mahesh', ['ma', 'he', 'mah', 'e', 'sh']))
console.log(countConstruct('mahesh', ['a', 'hesh']))

/** O(n*m*m) time where second m is for slice 
 * O(m*m) space first m for stack and sencond for slice values 
 */
const countConstructMemo = (target, words, memo={}) => {
    if(memo[target]) return memo[target];
    if(target === '') return 1;
    
    let count = 0;
    for(let word of words) {
        if(target.indexOf(word) === 0){ // indicates prefix found
            let subString = target.slice(word.length);
            let result = countConstruct(subString, words);
            count  = count + result;
        }
    }

    memo[target] = count;
    return count;
}

console.log(countConstructMemo('mahesh', ['ma', 'he', 'mah', 'e', 'sh']))
console.log(countConstructMemo('mahesh', ['a', 'hesh']))