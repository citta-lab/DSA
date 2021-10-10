/** data where [ai, bi] in which bi needs to be done before completing ai */
const data = [
    [1,0],
    [1,2],
    [0,2],
    [0,3]
];

const buildDependencyCount = (data, hash={}) => {
    data.forEach(arr => {
        
        let key = arr[0];
        let value = arr[1];

        if(hash[value]) hash[value] += 1;
        
        if(!hash[key]) hash[key] = 0;
        if(!hash[value]) hash[value] = 1;

    })

    return hash;
}

const buildDependencyList = (data, hash = {}) => {
    data.forEach(arr => {
        let key = arr[0]; let value = arr[1];
        if(hash[key]) hash[key].add(value);

        if(!hash[key]) {
            let setA = new Set();
            hash[key] = setA.add(value);
        }

    })

    return hash
}

const topoSort = (data) => {

    let dependencyCount = buildDependencyCount(data);
    let dependencyList = buildDependencyList(data);
    let stack = [];

    for(const[key, value] of Object.entries(dependencyCount)){
        if(value === 0) delete dependencyCount[key]; // if we dont have dependecy then it must be the leaf

        let listSetValue = dependencyList[key];
        let iterator = listSetValue.values();
        let firstDependentNode = iterator.next().value;
        stack.push(firstDependentNode);

        depe

    }
}

//console.log(buildCourseDependency(courses))
console.log(buildDependencyCount(data))
console.log(buildDependencyList(data))