const graph = {
    f : ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

const hasPathIterative = (graph, source, target) => {

    let stack = [];
    stack.push(source);

    while(stack.length){
        let node = stack.pop();
        if(node === target){
            return true;
        }

        for(let child of graph[node]){
            stack.push(child);
        }
    }

    return false;
}

console.log(' ------ hasPath Iterative ------')
console.log(hasPathIterative(graph, 'f', 'k')); // true
console.log(hasPathIterative(graph, 'j', 'g')); // true
console.log(hasPathIterative(graph, 'h', 'k')); // false
console.log(hasPathIterative(graph, 'j', 'j')); // true

const hasPathRec = (graph, source, target) => {
   let result = helper(graph, source, target);
   if(result) return true;
   return false;
}

let helper = (graph, source, target) => {
    if(source === target) return true;
    for(let child of graph[source]){
        let result = helper(graph, child, target);
        if(result) return true;
    }
}

console.log(' ------ hasPath Recursion ------')
console.log(hasPathRec(graph, 'f', 'k'));
console.log(hasPathRec(graph, 'j', 'g'));
console.log(hasPathRec(graph, 'h', 'k'));
console.log(hasPathRec(graph, 'j', 'j'));