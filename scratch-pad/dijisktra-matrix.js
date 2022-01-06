
const dijisktra = (edges) => {
    
    let distance = new Array(edges.length).fill(Infinity);
    distance[0] = 0;

    let visited = new Set();

    while(visited.size !== distance){

        const [minNode, minDis] = getMin(distance, visited);

        if(minDis === Infinity){
            break;
        }

        if(visited.has(minNode)){
            continue;
        }

        visited.add(minNode);

        let children = edges[minNode];
        for(let child of children){
            const [destination, distanceValue] = child;
            const newDis = distanceValue + minDis;
            const curDis = distance[destination];
            const min = Math.min(newDis, curDis);
            distance[destination] = min;
        }

    }
    
    return distance.map(x => x === Infinity ? -1 : x)
}

const getMin = (distance, visited) => {
    let curDis = Infinity;
    let curNode = -1;

    for(let i=0; i<distance.length; i++){
        let node = i;

        if(visited.has(node)){
            continue
        }

        const dis = distance[node];
        if(dis <= curDis){
            curDis = dis;
            curNode = node;
        }
    }

    return [curNode, curDis]
}

let matrix = [ [ 0, 4, 0, 0, 0, 0, 0, 8, 0 ],
[ 4, 0, 8, 0, 0, 0, 0, 11, 0 ],
[ 0, 8, 0, 7, 0, 4, 0, 0, 2 ],
[ 0, 0, 7, 0, 9, 14, 0, 0, 0],
[ 0, 0, 0, 9, 0, 10, 0, 0, 0 ],
[ 0, 0, 4, 14, 10, 0, 2, 0, 0],
[ 0, 0, 0, 0, 0, 2, 0, 1, 6 ],
[ 8, 11, 0, 0, 0, 0, 1, 0, 7 ],
[ 0, 0, 2, 0, 0, 0, 6, 7, 0 ] ];

let edges = [
    [ [ 1, 7 ] ],
    [ [ 2, 6 ], [ 3, 20 ], [ 4, 3 ] ],
    [ [ 3, 14 ] ],
    [ [ 4, 2 ] ],
    [],
    []
]

// console.log(dijisktra(matrix));
console.log(dijisktra(edges));