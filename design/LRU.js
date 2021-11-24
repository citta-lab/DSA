/** 
 * Least Recently Used Cache Mechanism 
 * Example: Browser History 
 * 
 * Important: time complexity should be O(1) operation for removal and update.
 * 
 * EXAMPLE: 
    Input
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    Output
    [null, null, null, 1, null, -1, null, -1, 3, 4]

    Explanation
    LRUCache lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // cache is {1=1}
    lRUCache.put(2, 2); // cache is {1=1, 2=2}
    lRUCache.get(1);    // return 1
    lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    lRUCache.get(2);    // returns -1 (not found)
    lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    lRUCache.get(1);    // return -1 (not found)
    lRUCache.get(3);    // return 3
    lRUCache.get(4);    // return 4
 * 
 *
 * leetcode: https://leetcode.com/problems/lru-cache/
 * video: https://www.youtube.com/watch?v=7ABFKPK2hD4 
 */

/**
 * ANSWER (analysis): 
 * 
 * #1: LRU
 * LRU will have fixed SIZE. So we cannot keep adding new elements without removing the existing nodes/values.
 * So LRU is designed to remove least recently used node. Below are the methods we can think of,
 * put: adding value
 * get: getting value
 * recent: show recently used value
 * 
 * #2: LINKEDLIST
 * Hence the time complexity we need to achive is O(1) we need to make sure whenever we update/remove
 * values from the cache we do it at constant time. The data structure which facilitate in O(1) removal
 * without needing to resize is LINKEDLIST. 
 * 
 * #3: HASHMAP
 * However we cannot do O(1) lookup using LINKEDLIST, we will need a data structure which does O(1) lookup
 * which is HASHMAP.
 * 
 * #4: HASHMAP pointing to LINKEDLIST
 * Combining this will give us HashMap stores a key, and value would be a reference to LINKEDLIST node. If we
 * need to remove least recently used value, we will look up HashMap for key, finds the reference pointing to 
 * LINKEDLIST, then remove the pointers in linkedList.
 * 
 * #5: DOUBLY LINKEDLIST
 * Why not singly LinkedList ? As LRU has limited size and we need to make sure least recently used value needs
 * to be replaced while adding new value. We will have to keep most recenty used at RIGHT MOST SIDE and least 
 * recently used at LEFT SIDE. 
 * 
 * Singly linked lists could have worked, but are harder to implement correctly, 
 * because if you want to remove an item from the list you have to know its predecessor. So the doubly linked 
 * list was probably the easiest efficient solution that meets all the requirements. 
 * 
 * #6: TREAT IT like QUEUE
 * Keep all old nodes in left side and recently used and newer nodes on right side of the doubly linkedList. 
 * Left (dummy node) <-> Node 1 <-> Node 2 <-> Node 3 <-> Right (dummy node)
 */


/** Step 1: Define Doubly LinkedList Node */
class DoublyNode {
    constructor(key, val){
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(size){
        this.size = size;
        /** defining hashMap for O(1) lookup */
        this.cache = {}; 

        /** defining doubly linkedList with dummy nodes pointing to each other */
        this.left = new DoublyNode(0, 0); // old nodes
        this.right = new DoublyNode(0, 0); // new and recently viwed nodes 

        this.left.next = this.right;
        this.right.prev = this.left;
        
        this.count = 0;
    }

    put(key, value){
        /** instead using count for performance improvement */
        //let cacheSize = Object.entries(this.cache).length + 1; 
        
        let node = this.cache[key];

        if(node){
            // this.remove(node); <-- can use this but this will delete the existing node and add at tail end which doesnt really do real update.
            
            /** if found, update the value in linkedList by using map key then run get so we push this to rightside */
            node.val = value;
            this.get(key);
            return;
        }

        let newNode = new DoublyNode(key, value);
        this.insert(newNode);
        this.cache[key] = newNode;

        this.count ++;
        if(this.count > this.size){
            let nodeAfterLeft = this.left.next;
            this.remove(nodeAfterLeft);
            delete this.cache[nodeAfterLeft.key]
            this.count --
        }
        
    }

    get(key){

        let node = this.cache[key];

        if(node){
            this.remove(node); // remove pointers
            this.insert(node); // add at right side
            return node.val;    
        }

        /** return -1 if not found */
        return -1;
    }

    getRecent(){
        console.log(this.right.prev);
        return this.right.prev;
    }

    /** HELPER METHODS */

    /** remove from linkedList */
    remove(node){
        let prevNode = node.prev;
        let nextNode = node.next;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    /** insert at right most side of the linkedList */
    insert(node){
        let nodeBeforeRight = this.right.prev; 

        nodeBeforeRight.next = node;
        node.prev = nodeBeforeRight;
        this.right.prev = node;
        node.next = this.right;
    }
}



let lrc = new LRUCache(2);
lrc.put(1,1);
console.log(lrc.get(1)) // 1
console.log(lrc.get(2)); // -1
console.log("-------- end --------");

lrc = new LRUCache(2);
console.log(lrc.get(2)); // -1
console.log(lrc.put(2,6)); // null
console.log(lrc.get(1)); // -1
console.log(lrc.put(1,5)); // null
console.log(lrc.put(1,2)); // null
console.log(lrc.get(1)); // 2
console.log(lrc.get(2)); // 6  <-- if we use remove in put for updating duplicate then we would have deleted [2,6] while adding [1,5] as new entry

