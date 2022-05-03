let s = ["abc, 500",
"sadhasjhkgdsak, 230239203",
"fsgdfssd, 78",
"sss, 56",
"ss, 56", 
"sss, 5678",
"sssdsds, 56", 
"ssssdsd, 56"];

function stringLimit (s, wordLimit, minWordLength){

    if(!minWordLength) return 

    let result = [];
    // o(n)
    for(let wordCount of s){
        const [str, count] = wordCount.split(",");

        if(str.length < wordLimit){
            continue;
        }

        result.push([str, count]);
    }

    // o(nlogn)
    result.sort((a,b) => parseInt(b[1]) - parseInt(a[1]));

    return result.filter((val, index) => index < wordLimit);
}


let result = stringLimit(s, 3, 3);
console.log(result)