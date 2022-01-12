/** 
 * 
 * 116. Populating Next Right Pointers in Each Node 
 * 
 * You are given a perfect binary tree where all leaves are on the same level,
 * and every parent has two children. The binary tree has the following definition:
 * 
 * struct Node {
        int val;
        Node *left;
        Node *right;
        Node *next;
   }
 * Populate each next pointer to point to its next right node. 
 * If there is no next right node, the next pointer should be set to NULL.
 * Initially, all next pointers are set to NULL.
 *
 * Example:
 * Input: root = [1,2,3,4,5,6,7]
 * Output: [1,#,2,3,#,4,5,6,7,#]
 * 
 * leetcode-question:116
 * leetcode:https://leetcode.com/problems/populating-next-right-pointers-in-each-node/
 *
 */

/** Time: O(N) & Space: O(N) */
var connect = function(root) {
    
    if(!root) return root;
    
    let queue=[];
    queue.push(root);
    
    while(queue.length){
        let size = queue.length;
        for(let i=0; i<size; i++){
            let node = queue.shift();
            
            /** 
             * IMPORTANT: only starts attaching next when we have 
             * atleast two nodes in level order. When we pick the last 
             * node in level order this condition skips as i === size-1 
             * which helps in not doing any node.next rather use the default
             *  null provided in the given data 
             * */
            if(i !== size-1){
                node.next = queue[0] || null; 
            }
            
            /** adding children to queue */
            if(node.left){
                queue.push(node.left);
            }
            if(node.right){
                queue.push(node.right);
            }
        }
    }
    
    return root;
};