
const courses = {
    9: [8, 7, 6],
    8: [4,5],
    7: [3],
    6: [2],
    5: [2, 1],
    4: [1],
    3: [1]
}



const cleanList = {
    1: 0,
    2: 0,
    3: 0,
    4:0,
    5:0,
    6:0,
    9: 2,
    7:0,
    8:0,
}

const checked = {
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    9: false,
    7: true,
    8: true

}


// const buildCourseDependency = (courses, hash={}) => {
//     Object.entries(courses).forEach(([key, valueArray]) => {
//         if(!hash[key]) hash[key] = 0;
//         valueArray.forEach(value => {
//             if(!hash[value]) hash[value] = 0;
//         })
//     })

//     return hash;
// }

const buildCourseDependency = (courses, hash={}) => {
    Object.entries(courses).forEach(([key, valueArray]) => {
       if(!hash[key]){
           hash[key] = 0
       }else{
           hash[key] = hash[key] + 1;
       }
        valueArray.forEach(value => {
            if(!hash[value]){
                hash[value] = 1
            }else{
                hash[value] = hash[value] + 1;
            }
        })
    })

    return hash;
}

const topoSort = (graph) => {

}

console.log(buildCourseDependency(courses))