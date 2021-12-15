
/** O(N) time and O(N) space refer [this](https://github.com/citta-lab/DSA/blob/2d1ab36bdab8c7bd9f366c5e88d18d9cf8318fa9/linkedList/palindrome-linkedList.js) for O(1) space without needint to deep copy */
var isPalindrome = function(head) {
    let copy = makeCopy(head);
    
    let listHead = head;
    let reversedHead = reverse(copy);
    
    while(listHead && reversedHead){
        if(listHead.val !== reversedHead.val){
            return false;
        }
        
        listHead = listHead.next;
        reversedHead = reversedHead.next;
    }
    
    return true;
};

const reverse = (root) => {
    let pre = null;
    while(root){
        let temp = root.next;
        root.next = pre;
        pre = root;
        root = temp;
    }
    
    return pre;
};

const makeCopy = head => {

    let dummy = head;
    
    let newList = new ListNode(null);
    let cur = newList;
    while(dummy){
        let node = new ListNode(dummy.val);
        cur.next = node;
        cur = cur.next;
        dummy = dummy.next;
    }
    
    console.log(newList.next)
    return newList.next;
}