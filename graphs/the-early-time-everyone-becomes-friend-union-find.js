/**  
 * The Earliest Moment When Everyone Become Friends 
 * 
 * There are n people in a social group labeled from 0 to n - 1. You are given an array logs where logs[i] = [timestampi, xi, yi] 
 * indicates that xi and yi will be friends at the time timestampi.
 * Friendship is symmetric. That means if a is friends with b, then b is friends with a. 
 * Also, person a is acquainted with a person b if a is friends with b, or a is a friend 
 * of someone acquainted with b. Return the earliest time for which every person became 
 * acquainted with every other person. If there is no such earliest time, return -1.
 * 
 * leetcode:https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3912/
 * 
 * hint: union find
 * 
 * */

 var earliestAcq = function(logs, n) {
    
    let parent = [];
    for(let i=0; i<n; i++){
        parent.push(i);
    }
    
    let findParent = (node, parent) => {
        if(node === parent[node]) return node;
        return parent[node] = findParent(parent[node], parent);
    }
    
    let unionCount = n;
    let union = (nodeA, nodeB) => {
        let p1 = findParent(nodeA, parent);
        let p2 = findParent(nodeB, parent);
        if(p1 !== p2){
            parent[p1] = p2;
            unionCount -= 1; /** helps to make sure we considered all the unions */
            return true;
        }
        
        return false;
    }
    
    let finalTime = 0;
    /** helps sorting the friends by the time so finalTime always picks the latest */
    logs.sort((a,b) => a[0] - b[0]);
    
    for(let edge of logs){
        const [time, first, second] = edge;
        let result = union(first, second, time);
        if(result) finalTime = time;
    }
    
    /** if for somereason we didnt do union then we didnt complete so -1 */
    return unionCount === 1 ? finalTime : -1;
};

let logs = [[0,2,0],[1,0,1],[3,0,3],[4,1,2],[7,3,1]]; 
let n = 4;
console.log(earliestAcq(logs, n)); //3

logs = [[9,0,3],[0,2,7],[12,3,1],[5,5,2],[3,4,5],[1,5,0],[6,2,4],[2,5,3],[7,7,3]];
n= 8;
console.log(earliestAcq(logs, n)); //-1


