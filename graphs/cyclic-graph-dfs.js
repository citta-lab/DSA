
/**
 * Given array of edges which represents the adjacency list for a node, determine if the given 
 * directed graph makes the cyclic graph. Number of nodes is equal to number of edges and the 
 * given adajcency are directional.
 * 
 * edges = [[2,3], [0], [1,3]] means 0 node is pointing to node 2 and 3. Node 1 is pointed to 
 * node 0 and last node 2 is pointed to node 1 and node 3.
 * 
 * Example:
 * edges = [ [ 1, 3 ], [ 2, 3, 4 ], [ 0 ], [], [ 2, 5 ], [] ]
 * cylic as it forms 0->1->2->0 , 1->2->0->1 etc cycle 
 * 
 * NOTE: 
 * Slightly improved solution 
 * https://github.com/citta-lab/DSA/blob/b4ce1b08c3eb4bcdc189b3efa8f7badbdf224ccc/graphs/cyclic-graph-dfs-II.js
 * 
 * In Modifed appraoch we will use SET for tracking visited and inStack instead of Array. 
 * we can reduce the time complexity but it wouldn't change overall space and time complexity here.
 */

 /** O(n + e) time where n = nodes and e is edges. O(2n) => O(n) time for stack/visited/inStack */
function cycleInGraph(edges) {
 
	/** keep track of visited nodes to avoid cycling, then inStack to keep track of currently in DFS stack */
	const visited = new Array(edges.length).fill(0);
	const inStack = new Array(edges.length).fill(0);
	
	for(let i=0; i<edges.length; i++){
		if(visited[i]) continue; /** optional to not perfrom DFS on already visited node */
		/** if we find its cyclic then return and exit */
		const result = dfs(i, edges, visited, inStack);
		if(result) return true;
	}
	
	/** if we traverse all nodes and didnt do early return then we didnt find cyclic */
  return false;
}

const dfs = (node, edges, visited, inStack) => {
	
	/** 
	if the node is already visited & the node is still in current stack (DFS is still happening, 
	for its children) then it means we found the cyclic graph. If we find the node is visted, but
	node is not in the stack then we are just visiting the already visited node from earlier DFS
	processing, so we can just move on */ 
	if(visited[node] && inStack[node]) return true;
	visited[node] = 1;
	inStack[node] = 1;
	
	const children = edges[node];
	for(let child of children){
		/** need to return so result get hoisted and can do early exit */
		const result = dfs(child, edges, visited, inStack);
		if(result) return true
	}
	
	/** 
	IMPORTANT: 
	once DFS is applied to the node & it's children then we can reset 
	the node in stack. This will happen once DFS is applied to all of it's
	children in the tree 
	*/
	inStack[node] = 0;
	return false
}


let edges = [ [ 1, 3 ], [ 2, 3, 4 ], [ 0 ], [], [ 2, 5 ], [] ]
console.log(cycleInGraph(edges)); // true


edges = [ [ 1 ], [ 2, 3, 4, 5, 6, 7 ], [], [ 2, 7 ], [ 5 ], [], [ 4 ], [] ]
console.log(cycleInGraph(edges)); // false

edges = [ [ [ 0 ], [ 1 ] ] ]
console.log(cycleInGraph(edges)); // true

edges = [  [ 1 ], [ 2, 3, 4, 5, 6, 7 ], [], [ 2, 7 ], [ 5 ], [], [ 4 ], [ 0 ] ]
console.log(cycleInGraph(edges)); // true










/** OR use SET instead of ARRAY */
console.log("---------- ( MODIFIED APPRAOCH ) USING SET--------");

function cycleInGraphII(edges) {
	const visited = new Set();
	const currentStack = new Set();
	
	for(let i =0; i<edges.length; i++){
		let result = dfsII(i, edges, visited, currentStack);
		if(result) return true;
	}
	
  return false;
}


const dfsII = (node, edges, visited, stack) => {
	if(visited.has(node) && stack.has(node)) return true
		visited.add(node)
		stack.add(node);
	
	let children = edges[node];
	for(let child of children){
		let result = dfs(child, edges, visited, stack);
		if(result) return true
	}
	
	stack.delete(node)
	return false;
}
edges = [ [ 1, 3 ], [ 2, 3, 4 ], [ 0 ], [], [ 2, 5 ], [] ]
console.log(cycleInGraphII(edges)); // true


edges = [ [ 1 ], [ 2, 3, 4, 5, 6, 7 ], [], [ 2, 7 ], [ 5 ], [], [ 4 ], [] ]
console.log(cycleInGraphII(edges)); // false

edges = [ [ [ 0 ], [ 1 ] ] ]
console.log(cycleInGraphII(edges)); // true

edges = [  [ 1 ], [ 2, 3, 4, 5, 6, 7 ], [], [ 2, 7 ], [ 5 ], [], [ 4 ], [ 0 ] ]
console.log(cycleInGraphII(edges)); // true