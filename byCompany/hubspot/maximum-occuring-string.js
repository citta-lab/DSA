
/**
 *  Find maxium occurance of a substring of size K in a given string.
 * similar Question : https://www.geeksforgeeks.org/substring-of-length-k-having-maximum-frequency-in-the-given-string/ 
 * */
const maxOccuringString = (str, k) => {

    if(!str || !str.length || k <= 0 || str.length < k ) return str; 

    if(str.length === k) return str 

    let map = new Map(); 
    
    let limitIndex = k; 
    let maxCount = 1; 

    /** calculate starting substing from 0 until k, use result to hold max substring */
    let result = str.substring(0, limitIndex);
    map.set(result, 1);

    while(limitIndex < str.length){
        let substring = str.substring(limitIndex - k + 1, limitIndex + 1);

        if(!map.has(substring)) map.set(substring, 0);
        map.set(substring, map.get(substring)+1); 

        if(map.get(substring) > maxCount){
            maxCount = map.get(substring);
            result = substring;
        }

        limitIndex ++
    }

    console.log(result);
    return result;
}

let str = "bbbbbaaaaabbabababa";
let K = 5;
maxOccuringString(str, K); //babab

str = "abcefabcabcabcbbbadcadc";
K = 3;
maxOccuringString(str, K); //abc