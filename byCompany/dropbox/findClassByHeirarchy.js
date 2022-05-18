
/**
 * Question : Implement getByClassnameHierarchy
 * 
 */
const { JSDOM } = require("jsdom");

const { document } = new JSDOM(`
    <div class="a" id="a-1">
        <div class="b" id="b-1">
            <div class="c" id="c-1">
            </div>
            <div class="c" id="c-2">
            </div>
        </div>
        <div class="c" id="c-3">
        </div>
    </div>
`).window;

const getIds = (elements = []) => Array.from(elements).map((x) => x.id);
const root2 = document.getElementById("a-1");

console.log("actual: ", getIds(getByClassnameHierarchy(root2, "a>b")));
console.log(`a>b expected:`, `['b-1']`, "\n");


/** Answer  */

function getByClassnameHierarchy(root, classNames) {
  let classNamesArr = classNames.split(">");
  if (!classNamesArr.length) return [];

  let result = [];
  function backtrack(node, index) {
    if (index >= classNamesArr.length) return;

    let isMatch = node.className === classNamesArr[index];

    if (index > 0 && !isMatch) return;

    if (index === classNamesArr.length - 1 && isMatch) {
      result.push(node);
      return;
    }

    let nextIndex = index + 1;
    if (!isMatch) nextIndex = 0;

    for (let child of node.children) {
      backtrack(child, nextIndex);
    }
  }

  backtrack(root, 0);
  return result;
}

/** test cases  */
// order matters!:
console.log("actual: ", getIds(getByClassnameHierarchy(root2, "b>a")));
console.log(`b>a expected:`, `[]`, "\n");

// must be direct descendants:
console.log("actual: ", getIds(getByClassnameHierarchy(root2, "a>c")));
console.log(`a>c expected:`, `[c-3]`, "\n");

// the number of classes in the string doesn't matter:
console.log("actual: ", getIds(getByClassnameHierarchy(root2, "a>b>c")));
console.log(`a>b>c expected:`, `['c-1', 'c-2']`, "\n");

console.log("actual: ", getIds(getByClassnameHierarchy(root2, "b>c")));
console.log(`b>c expected:`, `['c-1', 'c-2']`, "\n");

console.log("actual: ", getIds(getByClassnameHierarchy(root2, "c")));
console.log(`c expected:`, `['c-1', 'c-2', 'c-3']`, "\n");
