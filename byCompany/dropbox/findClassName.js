/**
 * Implement getByClassName(root, className) {} 
 */


const { JSDOM } = require("jsdom");
const { document } = new JSDOM(`
  <div class='a' id="root">
    <div class='b' id='b-1'>
      <div class='a' id='a-2'>
        <div class='d' id='d-1'></div>
      </div>
      <div class='c' id='c-1reset '>
        <div class='a' id='a-3'>
          <div class='d' id='d-2'></div>
        </div>
      </div>
    </div>
  </div>
`).window;
const getIds = (elements = []) => Array.from(elements).map((x) => x.id);
const root = document.getElementById("root");


// Answer: 

/** Implemented method */
function getByClassName(root, className) {
  let nodes = [];

  function traverse(node) {
    if (node.className === className) {
      nodes.push(node);
    }

    for (let child of node.children) {
      traverse(child);
    }
  }

  traverse(root);

  return nodes;
}

console.log("actual:  ", getIds(getByClassName(root, "a")));
console.log("expected:", `[ 'root', 'a-2', 'a-3' ]`);