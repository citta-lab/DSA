# BIG O
The goal of this doccumentation is to capture `Time` and `Space` complexity for all the data structure which we use in solving algorithm problems and techniques. Intention is to give a gilmps not no means to list all the problem complexity.

## Arrays :

## Stack / Queues :

## HashMap / Set :

## Nested for/While loop :

## LinkedList: 

## Dynamic Programming
### Fib Calculation
On every recusion we are calling `fib(n-1)` on left and `fib(n-2)` on right which will further branch out like two more times on left, right respectively until we reach base condition. So Time complexity would be `O(2^N)`. 
    At any given time recusion call will only have `N` stack, we will not have all the nodes until base in the callstack. Once the left leaf recursion ( example: `fib(1)` or `fib(0)`) returns it goes to right leaf node.  
| Time | Space | DS |
| --- | --- |--- |
| O(2^n) | O(N) | due to recursion call on (n-1)+(n-2) |
| O(N) | O(N) | when MEMORIZATION is used |

## Binary Search Tree:  
```js
Time: O(log N)
Space: O(log N)
```
The main benifit of Binary Search is to split the tree either left or right rather than tackling the entire tree at once. Imagine if we dont consider a a given tree as Binary Search Tree rather just a Binary Tree. Then we will either apply DFS or BFS based on the requirement. This will cost us O(N) time and O(N) space. Becasue if we use iterative or recursion we will endup putting all the nodes in the callstack before we start solving the tree problem. 

Now lets treat this as Binary search tree, then we decide either to go left or right at any 'given time'. So call stack will only have those many nodes ( left or right ) nodes in the stack which is O(log N) time and O(log N) space. Example of coutning complete binary tree using binary search,
```js
const count = root => {

let left = node => {
  if(!node) return 0;
  return 1 + left(node.left);
}

let right = node => {
  if(!node) return 0;
  return 1 + right(node.right);
}

if(left === right){
 return Math.pow(2, left) - 1;
}

/** O(log N * log N) worst case ? */
return 1 + count(root.left) + count(root.right);
}
```
instead of solving like binary tree which will have O(N) time/space
```js
const count = root => {
return root ? 1 + count(root.left) + count(root.right) : 0;
}
```

## Binary Tree: 

## Graphs:
### Dijkstra Algorithm for Shortest Path ( BFS ):
| Time | Space | DS |
| --- | --- |--- |
| O(N^2) | O(N) | When used BFS with Array |
| O(N logN) | O(N) | When used BFS with min Heap |

### Longest Increasing Path (DFS):
In bruteforce ( just DFS ), we will keep traversing the same cell one or more times to find the increasing path. 
| Time | Space | DS |
| --- | --- |--- |
| O(2^m+n) | O(m*n) | with just DFS |
| O(m*n) | O(m*n) | with DFS and Memoization |

## Sliding Window:

## Toposort:

## Recursion: 
