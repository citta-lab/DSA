const graph = {
    a : ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirst = (graph, start) => {
    let stack = [];
    stack.push(start);

    let result = []
    while(stack.length){
        let node =  stack.pop();
        result.push(node);

        for(let child of graph[node]){
            stack.push(child);
        }
    }

    return result;
}

const depthFirstRec = (graph, start) => {
    let result = [];
     helper(graph, start, result);
     return result;
};

const helper = (graph, start, result) => {
    result.push(start);
    for(let child of graph[start]){
        helper(graph, child, result);
    }
}

// console.log(depthFirst(graph, 'a'));
console.log(depthFirstRec(graph, 'a'));