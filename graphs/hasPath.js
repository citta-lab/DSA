/** given the graph can we find if the destination node can be reached  */

const graph = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['g'],
    g: [],
    f: [],
    e: [],
    d: ['f'],
    x:['y']
}


/** DFS way of solving */
const hasPath = (graph, rootNode, destNode) => {
    
    if(rootNode === destNode) return true; 

    const stack = [rootNode];

    while(stack.length > 0){
        let node = stack.pop();
        let children = graph[node];

        for(let child of children){
            if(child === destNode) return true;
            stack.push(child);
        }
    }

    return false;
}

console.log(hasPath(graph, 'a', 'f')); // true
console.log(hasPath(graph, 'a', 'e')); // true
console.log(hasPath(graph, 'a', 'a')); // true
console.log(hasPath(graph, 'c', 'g')); // true
console.log(hasPath(graph, 'c', 'a')); // false