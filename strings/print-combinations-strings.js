const combination = (s) => {
    let result = [];
    for(let i=0; i<s.length; i++){
        let comb = '';
        for(let j=i; j<s.length; j++){
            comb = comb + s[j];
            result.push(comb);
        }
    }

    return result;
}

console.log(combination('abc')); // abc, bc, ac, ab, a, b, c