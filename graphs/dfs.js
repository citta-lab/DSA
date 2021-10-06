/**
 * Depth first will focus on traversing the node to it's longest point. The thing to remember here is to use 
 * STACK which will forces us to use last in first out. 
 * Stack Methods: 
 * array.pop() will give us last element out 
 * array.push() will add element at the last 
 * 
 * Note: DFS can be implemented using recursion as well, but remember its all about STACK 
 */

  /** given graph */
  const graph = {
    a: ['b', 'c'],
    b: ['d', 'e'],
    c: ['g'],
    g: [],
    f: [],
    e: [],
    d: ['f']
}

const dfs = (rootNode, graph) => {

    /** need to start somewhere, so take the given node and always process it from stack */
    const stack = [rootNode];

    /** we need to make sure we process all nodes from the stack, thats the goal right ? */
    while(stack.length > 0){
        /** imp: we need to take element from the stack to process. use pop() */
        const node = stack.pop();
        console.log(node);
        /** given node might have children right? lets verify in graph and process it anyway */
        const children = graph[node];
        for(let child of children){
            stack.push(child); // add each child back to stack so it can be processed
        }
    }
}

console.log(dfs('a', graph));