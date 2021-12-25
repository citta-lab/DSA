/**
 * sentence1 and sentence2 are array of words which makes a sentence. Find if sentence 1 and sentence 2 words are identical 
 * given given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.
 * 
 * Return true if sentence1 and sentence2 are similar, or false if they are not similar.
 * 
 * LEET CODE:
 * https://leetcode.com/problems/sentence-similarity/
 * https://leetcode.com/problems/sentence-similarity-ii/
 * 
 * leetcode-question:737
 */



/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    
    if(sentence1.length != sentence2.length) return false;
    
    const graph = buildGraph(similarPairs);
    const visited = new Set();

   for(let i=0; i < sentence1.length; i++){
       
       let srcNode = sentence1[i];
       let targetNode = sentence2[i];

       if(srcNode === targetNode) continue;

       if(!graph[srcNode]) return false;
       if(!graph[targetNode]) return false;

        const result = dfs(srcNode, targetNode, graph, visited);
        if(!result) return false;
   }

    return true;

};


const buildGraph = (edges, graph={}) => {
    for(let edge of edges){
        const [ node1, node2] = edge;
    
        if(!graph[node1]) graph[node1] = [];
        if(!graph[node2]) graph[node2] = [];

        graph[node1].push(node2);
        graph[node2].push(node1);
    }

    //console.log(graph)
    return graph;
}


const dfs = (src, target, graph, visited) => {
    
    if(graph[src].includes(target)) return true
    
    if(visited.has(src)) return false;
    visited.add(src);

    for(let word of graph[src]){
        /** not clear why we need to check this if we have already visited and return true :/ */
         if(!visited.has(src) && dfs(word, target, graph, visited)) return true
    }

    return false;
}
    
    


let sentence1 = ["great","acting","skills"];
let sentence2 = ["fine","drama","talent"];
let similarPairs = [["great","fine"],["drama","acting"],["skills","talent"]];
console.log(areSentencesSimilar(sentence1, sentence2, similarPairs)); // true

sentence1 = ["an","extraordinary","meal"]
sentence2 = ["one","good","dinner"]
similarPairs= [
    ["great","good"],["extraordinary","good"],["well","good"],["wonderful","good"],
    ["excellent","good"],["fine","good"],["nice","good"],["any","one"],["some","one"],
    ["unique","one"],["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],
    ["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],["entertain","have"],
    ["drink","have"],["eat","have"],["take","have"],["fruits","meal"],["brunch","meal"],
    ["breakfast","meal"],["food","meal"],["dinner","meal"],["super","meal"],["lunch","meal"],
    ["possess","own"],["keep","own"],["have","own"],["extremely","very"],["actually","very"],
    ["really","very"],["super","very"]
];
console.log(areSentencesSimilar(sentence1, sentence2, similarPairs)); // true

sentence1 = ["great"], 
sentence2 = ["great"], 
similarPairs = []
console.log(areSentencesSimilar(sentence1, sentence2, similarPairs)); // true

sentence1 = ["great"], 
sentence2 = ["doubleplus","good"], 
similarPairs = [["great","doubleplus"]]
console.log(areSentencesSimilar(sentence1, sentence2, similarPairs)); // false

sentence1 = ["an","extraordinary","meal"]
sentence2 = ["a","good","dinner"]
similarPairs = [
    ["great","good"],["extraordinary","good"],["well","good"],
    ["wonderful","good"],["excellent","good"],["fine","good"],
    ["nice","good"],["any","one"],["some","one"],["unique","one"],
    ["the","one"],["an","one"],["single","one"],["a","one"],["truck","car"],
    ["wagon","car"],["automobile","car"],["auto","car"],["vehicle","car"],
    ["entertain","have"],["drink","have"],["eat","have"],["take","have"],
    ["fruits","meal"],["brunch","meal"],["breakfast","meal"],["food","meal"],
    ["dinner","meal"],["super","meal"],["lunch","meal"],["possess","own"],
    ["keep","own"],["have","own"],["extremely","very"],["actually","very"],
    ["really","very"],["super","very"]
]
console.log(areSentencesSimilar(sentence1, sentence2, similarPairs)); // false