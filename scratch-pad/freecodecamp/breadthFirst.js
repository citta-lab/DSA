const graph = {
    a : ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const breadthFirst = (graph, start) => {

    let queue = [];
    queue.push(start);

    let result = [];
    while(queue.length){
        let node = queue.shift();
        result.push(node);

        for(let child of graph[node]){
            queue.push(child);
        }
    }

    return result;
}

console.log(breadthFirst(graph, 'a'));