/** 
 * Given two nodes of a binary tree p and q, return their lowest common ancestor (LCA).
 * 
 * leetcode: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree-iii/
 * Great Example: http://www.zrzahid.com/least-common-ancestor/
 * 
 * Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
 * Output: 3
 *  */


// GIVEN 
// class Node {
//     public int val;
//     public Node left;
//     public Node right;
//     public Node parent;
// }

var lowestCommonAncestor = function(p, q) {
    
    /** bottom up appraoch: find height to root from given node */
    const h1 = findHeight(p);  console.log(h1);
    const h2 = findHeight(q);  console.log(h2)
    
    /** we need to move much deeper node in level with other node */
    let diff = Math.abs(h1 - h2);
    [p, q] = h1 < h2 ? [q, p] : [p, q]; // only reverse if h1 < h2 
    
    /** move deeper node up and make it in same level as other node */
    for(let i=diff; i>0; i--){
        p = p.parent;
    }
    
    /** traverse them together to up */
    while(p && q){
        /** when both parent becomes same, then return */
        if(p === q) return p || q;
        
        p = p.parent;
        q = q.parent;
    }
    
    return null;
};

const findHeight = (node) => {
    let height = 0;
    while(node && node.parent){
        node = node.parent;
        height++
    }
    
    return height
}
