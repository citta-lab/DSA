/**
 * sentence1 and sentence2 are array of words which makes a sentence. Find if sentence 1 and sentence 2 words are identical 
 * given given an array of string pairs similarPairs where similarPairs[i] = [xi, yi] indicates that the two words xi and yi are similar.
 * 
 * Return true if sentence1 and sentence2 are similar, or false if they are not similar.
 * 
 * LEET CODE:
 * https://leetcode.com/problems/sentence-similarity/
 */



/**
 * @param {string[]} sentence1
 * @param {string[]} sentence2
 * @param {string[][]} similarPairs
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2, similarPairs) {
    if(sentence1.length != sentence2.length) return false;
    
   let pairs = {}
   for(let pair of similarPairs){
       let [ first, second ] = pair;
       if(!pairs[first]) pairs[first] = [];
       if(!pairs[second]) pairs[second] = [];
       
       pairs[first].push(second);
       pairs[second].push(first);
   }
    
    
   for(let i=0 ; i < sentence1.length; i++){
       const wordOne = sentence1[i];
       const wordTwo = sentence2[i];
       
       /** if word in sentence one and two are equal then no need to look in Set */
       if(wordOne === wordTwo){
           continue;
       }
       
       /** boundry condition to make sure we have word of sentence in the Set, otherwise no point in looking so return false*/
       if(!pairs[wordOne]) return false;
       if(!pairs[wordTwo]) return false;
       
       /** set key values can have more than one element i.e array of words */
       let resultOne = findMatch(wordOne, pairs[wordTwo]);
       let resultTwo = findMatch(wordTwo, pairs[wordOne]);
       
       /** if we don't find matching word then we must have failed */
       if( resultOne === false || resultTwo === false ) return false
       
   }
       
   return true
};
    
    
/** Set keys can have array of elements so we need to check all of them before making decision */    
const findMatch = (matchWord, array) => {
    for( let word of array){
        if(matchWord === word) return true;
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