/** Find the shortest path to node f */
const graph = {
    a: ['c', 'b'],
    b: ['d', 'e'],
    c: ['g'],
    g: [],
    f: [],
    e: ['h', 'l'],
    d: ['f'],
    x:['y'],
    l:['f'],
    h:[]
}

/** BFS */
const targetLength = ( graph, rootNode, destNode) => { 

    const queue = [rootNode];
    let count = 0;

    while(queue.length > 0){
        const node = queue.shift();
       // count += 1;

        const children = graph[node];
        for(let child of children){
            if(child === destNode) return count;
            queue.push(child);
        }
        count += 1;
    }

    return count;
}