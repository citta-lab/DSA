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

console.log('************* iterative dfs *****************')
console.log(hasPath(graph, 'a', 'f')); // true
console.log(hasPath(graph, 'a', 'e')); // true
console.log(hasPath(graph, 'a', 'a')); // true
console.log(hasPath(graph, 'c', 'g')); // true
console.log(hasPath(graph, 'c', 'a')); // false



/** Recursion for DFS */
const hasPathRecursion = (graph, rootNode, destNode) => {
    
    if(rootNode === destNode) return true;

    const children = graph[rootNode];
    for(let child of children){
        if(child === destNode) return true;
        let result = hasPathRecursion(graph, child, destNode);
        if(result) return true;
    }

    return false;
}

console.log('************* recursion dfs *****************')
console.log(hasPathRecursion(graph, 'a', 'f')); // true
console.log(hasPathRecursion(graph, 'a', 'e')); // true
console.log(hasPathRecursion(graph, 'a', 'a')); // true
console.log(hasPathRecursion(graph, 'c', 'g')); // true
console.log(hasPathRecursion(graph, 'c', 'a')); // false