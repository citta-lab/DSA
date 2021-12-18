const graph = {
    f : ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

const hasPathBfs = (graph, source, target) => {
    let queue = [];
    queue.push(source);

    while(queue.length){
        let node = queue.shift();
        if(node === target) return true;
        for(let child of graph[node]){
            queue.push(child);
        }
    }

    return false;
};

console.log(' ------ hasPath BFS ------')
console.log(hasPathBfs(graph, 'f', 'k')); // true
console.log(hasPathBfs(graph, 'j', 'g')); // true
console.log(hasPathBfs(graph, 'h', 'k')); // false
console.log(hasPathBfs(graph, 'j', 'j')); // true