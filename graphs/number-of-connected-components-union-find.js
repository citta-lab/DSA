/** Given n nodes and edges for undirected graph find the number of 
 * components and Return the number of connected components in the graph.
 * (i.e) Number of Connected Components in an Undirected Graph. 
 * 
 * Important: Dont overlook why they have given "n" nodes with edges. 
 */

/**
 *  This is another solution for finding number of connected components using Union Find. If you interested in DFS recursion then visit here https://github.com/citta-lab/DSA/blob/244c7b503b6338a480132bf4309470a36a8d1ebd/graphs/NumberOfConnectedComponents.js
 */

// Union Find with Path Compression  
var countComponents = function(n, edges) {
    const parent = buildParent(n);
    let components = n;

    for(let edge of edges){
        const [node1, node2] = edge;

        const nodeParent1 = findParent(parent, node1);
        const nodeParent2 = findParent(parent, node2);

        if(nodeParent1 != nodeParent2){
            parent[nodeParent1] = nodeParent2;
            components -= 1;
        }
    }

    return components;
}

const buildParent = (nodeCount, array=[]) => {
    for(let i=0; i< nodeCount; i++) array.push(i);
    return array; 
}

const findParent = (parent, node) => {
    if(parent[node] === node) return node;
    return findParent(parent, parent[node]);
}


console.log(countComponents(5, [[0,1],[1,2],[0,2],[3,4]]))



/** Union Find with Path Compression and Size  */
const connectedComponentsTwo = (n, edges) => {
    const [ parent, size] = buildParentAndSize(n);
    let components = n;

    for(let edge of edges){
        const [node1, node2] = edge;
        const p1 = findParentTwo(parent, node1);
        const p2 = findParentTwo(parent, node2);
        if(p1 != p2){
            if(size[p1] > size[p2]){
                size[p1] = size[p1] + size[p2];
                parent[p1] = p2;
            }else{
                size[p2] = size[p2] + size[p1];
                parent[p2] = p1;
            }
            components -= 1;
        }
    }

    console.log("########### info ############");
    console.log("parent : "+parent);
    console.log("size : "+size);
    console.log("#############################");

    return components;
}

const buildParentAndSize = (n) => {
    const parent = [];
    const size = [];
    for(let i=0; i<n; i++){
        parent.push(i);
        size.push(1)
    }

    return [ parent, size];
}

const findParentTwo = (parent, node) => {
    if(node === parent[node]) return node;
    return findParentTwo(parent, parent[node]);
}

console.log(connectedComponentsTwo(5, [[0,1],[1,2],[0,2],[3,4]]))
