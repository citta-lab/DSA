
/** O(n) time and O(1) space but in our example we are using array to return the values so O(n) space */
var inorderTraversal = function(root) {
  // left, root, middle
    let arr=[];
    let val = preOrder(root, arr);
    return arr
};

const preOrder = (root, arr) => {
    let stack = [];
    /** keep running until returned */
    while(true){
    
    /** lets take root as current node */
    let cur = root;
        /** as long as current node is not null, keep moving */
        while(cur){
            /** if we find no left value, then we must process it's root value before we go right*/
            if(!cur.left){
                arr.push(cur.val);
                /** hence we found no left, root is accounted for, now we process right */
                cur = cur.right;
            }else{
                /** 
                 if we find left, then we need to attach root and it's respective right side of the node
                 to be processed only after processing left side's right node */
                let newCur = cur.left;
                /** find end of left side's rigght node so we can attach the original root */
                while(newCur.right){
                    newCur = newCur.right;
                }
                
                /** attach the original root node to be right most side of it */
                newCur.right = cur;
                
                /** 
                we need to detach left side of orignal root node so we dont go infinite loop
                and we move on processing the left node from root's standpoint 
                */
                let temp = cur;
                cur = cur.left;
                temp.left = null
            }
        }
        
        return arr;
    }
}

console.log(inorderTraversal([1,null,2,3]));// [1,2,3]
console.log(inorderTraversal([]));// []
console.log(inorderTraversal([1]));// [1]
