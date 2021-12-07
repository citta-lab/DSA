
let map = {
    '0': [],
    '1': ['1']
}

/** 
 * when debugged it picks up 1 and
 * then jumps to 0 before going inside
 * the loop for printing console */
for(let val in map['1']){
    console.log(val); // gives 0
}

map['1'].forEach((pre) => {
    console.log(pre); // gives 1
})

let result = map['1'];
for(let i=0; i< result.length; i++){
    console.log(result[i]); // gives 1
}