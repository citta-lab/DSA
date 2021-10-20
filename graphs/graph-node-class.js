
/** Node implementation for building graph */
class Node {
    constructor(name){
        this.name = name;
        this.children = [];
    }

    addChild(name){
        let node = new Node(name);
        this.children.push(node)
    }

    getChild(name){
        this.child = this.children.filter((child) => child.name === name);
        return this.child[0];
    }

    removeChild(name){
        this.children = this.children.filter((child) => child.name !== name);
    }
}


const dfs = (node, array=[]) => {
    array.push(node.name)
    for(let child of node.children){
        dfs(child);
    }
    console.log(array)
}

const dfsIterative = (node, array=[]) => {
    const stack = [node];
    while(stack.length > 0){
        let node = stack.pop();
        array.push(node.name)
        for(let child of node.children){
            stack.push(child);
        }
    }
    return array;
}

const bfs = (node, array=[]) => {
    const queue = [node];
    while(queue.length > 0){
        let node = queue.shift();
        array.push(node.name);
        for(let child of node.children){
            queue.push(child)
        }
    }

    return array;
}

let nodeA = new Node('A');
nodeA.addChild('B');
nodeA.addChild('C');
nodeA.addChild('D');


let nodeB = nodeA.getChild('B')
nodeB.addChild('E');
nodeB.addChild('F');

let nodeF = nodeB.getChild('F')
nodeF.addChild('I');
nodeF.addChild('J');

let nodeD = nodeA.getChild('D')
nodeD.addChild('G');
nodeD.addChild('H');

let nodeG = nodeD.getChild('G')
nodeG.addChild('K');

console.log(dfs(nodeA)); // read bottom to top as it shows as call stack 
console.log(dfsIterative(nodeA)); // returning an array
console.log(bfs(nodeA));




