/** 
 * Given "abc" we would like to prrint all the permutations of abc. i.e  
 * 
 * Result:
 * 
 * abc
 * acb
 * bac
 * bca
 * cab
 * cba
 * */


const permutations = (s) => {
    let result = [];

    if(s.length < 1) return null;
    if(s.length === 1) return s;

    for(let i=0; i < s.length; i++){
        let char = s[i];
        let remainingChars = s.slice(0, i) + s.slice(i+1); // leaves the i'th value 
        for (let perm of permutations(remainingChars)){
            result.push(char + perm)
        }

        /** OR */
        // for(let j=0; j<remainingChars.length; j++){
        //     result.push(char + permutations(remainingChars)[j])
        // }
    }

    return result;
};

console.log(permutations('abc'));