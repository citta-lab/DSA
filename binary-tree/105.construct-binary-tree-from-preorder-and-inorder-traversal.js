/** 

   105. Construct Binary Tree from Preorder and Inorder Traversal
   
   Given two integer arrays preorder and inorder where preorder 
   is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.
   
   Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
   Output: [3,9,20,null,null,15,7]
   
   leetcode-question:105
   leetcode:https:https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
   video:https://www.youtube.com/watch?v=ihj4IQGZ2zc
   
   BLIND: 29 (29/75)
   
   Hint
   - preorder ROOT, LEFT, RIGHT
   - inorder LEFT, ROOT, RIGHT
   - preporder's first node is always root of the tree
   - if we shift the element in pre-order then rest of the element either belongs to left or right of the root
   - everything on left of "newly shifted node from preorder" is left of the tree
   - everything on right of "newly shifted node from preorder" is right of the node.
   
  */

var buildTree = function(preorder, inorder) {
    
    if (!inorder.length) return null;
    
    /** preorder will always start with root of the tree, will make use of that */
    let node = preorder.shift();  // <-- causes O(n) time
    
    /** build new tree */
    let root = new TreeNode(node);
    
    /** we will find the root value in inorder to determine what goes in left and right of tree */
    let pivot = inorder.indexOf(node);
    
    /** everything from root's left in INORDER belongs to left tree */
    root.left = buildTree(preorder, inorder.slice(0, pivot));
    root.right = buildTree(preorder, inorder.slice(pivot+1));
    
    return root;
};


/** Another example which DOESNT use SHIFT and indexOF */
const buildTree = (preOrder, inOrder) => {
  const idxMap = inOrder.reduce((map, val, idx) => {
    map.set(val, idx);
    return map;
  }, new Map());
  preOrder.reverse()
  
  const helper = (ind1, ind2, root) => {
    if (ind1 > ind2) return null;
    const node = new TreeNode(preOrder.pop());
    node.left = helper(ind1, idxMap.get(node.val) - 1);
    node.right = helper(idxMap.get(node.val) + 1, ind2);
    return node;
  }
  
  return helper(0, inOrder.length - 1);
}
