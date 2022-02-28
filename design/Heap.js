/**
 * 
 * Heap Implementation
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

