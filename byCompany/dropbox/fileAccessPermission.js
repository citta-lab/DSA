/*** 
 * Question: Implement hasAccess method for fileAccess system. Here is the
 * qestion https://leetcode.com/discuss/interview-question/417262/dropbox-phone-screen-permissions-in-a-file-system
 * 
Input:
A
----->B
---------->H
---------->I (user has initila access to this)
----->C
---------->D
---------->E (user has initila access to this)
--------------->F
--------------->G

Access to the directory: E & I

*/

// child - parent mapping
let map = new Map();
map.set("A", null);
map.set("B", "A");
map.set("H", "B");
map.set("I", "B");
map.set("C", "A");
map.set("D", "C");
map.set("B", "A");
map.set("E", "C");
map.set("F", "E");
map.set("G", "E");

let initialAccess = ["E", "I"]; //permission

console.log(map);
console.log(hasAccess(map, "E", initialAccess)); // true
console.log(hasAccess(map, "G", initialAccess)); // true
console.log(hasAccess(map, "F", initialAccess)); // true 
console.log(hasAccess(map, "D", initialAccess)); // false
console.log(hasAccess(map, "H", initialAccess)); // false;
console.log(hasAccess(map, "I", initialAccess)); // true
console.log(hasAccess(map, "M", initialAccess)); // false


/** Answer : DFS  */
function hasAccess(path, dir, initialAccess) {
  if (!path.has(dir)) return false;

  if (initialAccess.includes(dir)) return true;

  let parent = path.get(dir);
  // similart to for(let child of children) however maping is 1:1
  if(path.has(parent)){
    let result = hasAccess(path, parent, initialAccess);
    if(result) return true;
  }
  

  return false;
}
