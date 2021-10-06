/**
 * Idea here is to remember to implement a graph using Queue which helps in traverseing 
 * all the children horizontally before processing the children of the child. 
 * use QUEUE :  which forces first in first out 
 * i.e 
 * array.shift() will take the first element out of the stack 
 * array.push() will push the elemene to end of the stack.
 * 
 *  in --->  D, C, B, A ---> out 
 *  If node E is needed to be added then we would need to add behind D and if we wanting
 *  to take out the element B then it has to be done after A.
 * 
 *  IMPORTANT :  Cant use recursion & remeber to use QUEUE 
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



 const bfs = (rootNode, graph) => {

    /** need to start somewhere, so let start from 'a' node */
    const queue = [rootNode];  // adding a to queue 

    /** we need to keep this rolling until queue is empty so we have nothing else to process */
    while(queue.length > 0){ 
        /** ah, shift() helps in taking out whatever is at first of the queue (i.e array implementation) */
        const node = queue.shift(); // takes out a itself 
        console.log(node);
        /** node might have children or not so we need to check from the graph */
        const children = graph[node]; // will return [b,c] for a
        for(let child of children ){ // each children from graph will have list of child node i.e b 
            queue.push(child); // pushes [b,c] in order so b goes to queue and then c
        }
    }
 }

 console.log(bfs('a', graph));
