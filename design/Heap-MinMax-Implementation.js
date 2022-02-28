
/**
 * 
 * Heap Implementation with comperator to do Min and Max heap.
 *
 * Heap implementation (max heap) : https://github.com/citta-lab/DSA/blob/main/design/Heap.js
 * 
 * Hint
 * - Max & Min  lookup : O(1) time.
 * - Insert & Delete: O(logn) time. So is Heapify : O(logn).
 * 
 * - Combination of Array and Tree like data structure
 * - We are dealing with Binary Heap as we will be using Binary Tree
 * - Condition of Binary Heap is that child nodes should be less than parent 
 * -- child node doesn't need to be in order (i.e less value left and more right etc )
 * - Binary heap is complete tree and read from LEFT to RIGHT.
 * - MinHeap and MaxHeap are two diff falour of heap
 * - 'Pop' will return max value from MaxHeap and min from MinHeap. O(1) operation
 * - 'Insert' will add element to Heap Array and then it make uses of "Heapify" method
 * to bubble up the value until we met condition parent node > children.
 * - 'Heapify' process of rearranging the nodes during 'Insert' and 'Delete' in a tree.
 * i.e O(logn) operation
 * 
 * 
 * Example: 
 * heap = [99, 44, 90, 40, 25, 5, 70]
 * In binary tree:
 *                99
 *               /  \
 *             44   90
 *            /  \   / \
 *          40   25  5  70
 * 
 * If we add new Element example 100 at 70'th position, then it will be added at the end of the heap array
 * like [99, 44, 90, 40, 25, 5, 70, 100] and then heapify will happen to carry the value
 * all the value until PARENT > CHILD. i.e 100 will be swaped with 90's position and then
 * with 99th's postion. 
 * 
 * At the end heapify array will become like  below once 100 is added and heapified.
 * head arr = [100,44,99,40,25,5,90]
 * 
 * 
 * Video: https://www.youtube.com/watch?v=hzxa4psfxxg
 * 
 */

 class Heap {
    constructor(comparator){
        this.heap = []
        this.comparator = comparator;
    }

    getParentIdx(i){
        return Math.floor((i-2/2));
    }

    getLeftChildIdx(i){
        return i*2+1;
    }

    getRightChildIdx(i){
        return i*2+2;
    }

    /** used while heapifying due to insert/delete actions */
    swap(index1, index2){
        let temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    /** add elements to last of the array and then heapify to rearrange */
    push(key){
        this.heap.push(key);
        this.heapifyUp();
    }

    heapifyUp(){

        let currentIdx = this.heap.length-1;
        
        /** 
         * if current value is more than it's parent, we need to swap until current value becomes the parent
         * of all lesser child values. Hence swap and then update the current index to parent of it's current
         * index. 
         */
        while(this.comparator(this.heap[currentIdx], this.heap[this.getParentIdx(currentIdx)])){
            this.swap(currentIdx, this.getParentIdx(currentIdx));
            currentIdx = this.getParentIdx(currentIdx);
        }
    }

    poll(){
        let maxElement = this.heap[0]; /** first element is always max */
        this.heap[0] = this.heap[this.heap.length-1]; /** assign last left most value to top */
        this.heap.length -- /** reduce the length as we just took one element off the array */
        this.heapifyDown(); /** readjust */
        
        return maxElement;
    }

    heapifyDown(){
        let currentIdx = 0; /** index of top element */

        /** 
         * Step 0: find if we have left child as our binary heap must have left child otherwise it is empty
         * Step 1: find biggest child between left and right
         * Step 2: swap current value with biggest value using swap and passing index
         * Step 3: update current to the latest biggest value we swapped with so we can keep checking
         */

        while(this.heap[this.getLeftChildIdx(currentIdx)]){
            let biggestChildIdx = this.getLeftChildIdx(currentIdx);

            if(this.heap[this.getRightChildIdx(currentIdx)] 
            && this.comparator(this.heap[this.getRightChildIdx(currentIdx)], this.heap[this.getLeftChildIdx(currentIdx)])){
                biggestChildIdx = this.getRightChildIdx(currentIdx);
            }

            if(this.comparator(this.heap[currentIdx], this.heap[biggestChildIdx])){
                this.swap(currentIdx, biggestChildIdx);
                currentIdx = biggestChildIdx;
            }else{
                return
            }

        }

    }
}


let maxHeap = new Heap((a, b) => a > b); //minHeap 
let minHeap = new Heap((a, b) => b > a); //maxHeap 

minHeap.push(25)
minHeap.push(5)
minHeap.push(40)
minHeap.push(70)
minHeap.push(90)
minHeap.push(44)

console.log(minHeap.heap.join(',')); // 5,25,40,44,70,90

maxHeap.push(25)
maxHeap.push(5)
maxHeap.push(40)
maxHeap.push(70)
maxHeap.push(90)
maxHeap.push(44)

console.log(maxHeap.heap.join(',')); // 90,70,44,40,25,5
