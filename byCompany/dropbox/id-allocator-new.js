/**
 * Id Allocator / Number / Phone Number / Server Allocation
 * Write a class for an id allocator that can allocate and release ids
 * 
 * Read for more details here : https://github.com/insideofdrop/Dropbox-Interview-Prep/blob/main/code/allocate_id.py
 * 
 * Optimized:
 * - Using Binary Heap we can reduce the allocate and release time less than O(N) to O(logN)
 * - It will use more Space 
 * - Find left side or right side if the ids are avilable and allocate  
 * 
 * 
 * https://massivealgorithms.blogspot.com/2016/03/dropbox-interview-misc.html
*/

class Allocator {
    constructor(maxValue){
        this.maxValue = maxValue;
        this.queue = [1,2,3,4];
        this.allocated = new Set();
        this.firstIdx = 0; /** optimization  */
    }

    allocate(){
        /** return unallocated id */
        let result = null;

       if (this.queue.length > 0){
            result = this.queue.pop();
        }

        if(result !== null){
            this.allocated.add(result);
            return result;
        } else {
            console.log('No ids available')
        }
    }

    release(id){
        /** release the given id so we can reuse it in the allocate set */
        if(id <= 0 && id > this.maxValue || !this.allocated.has(id)){
            console.log('Invalid id');
            return
        }

        /** before  */
        console.log(this.allocated); // [4,3]
        console.log(this.queue); // [1,2]
       
        this.allocated.delete(id);
        this.queue.unshift(id);
        
        /** after */
        console.log(this.allocated); // [4]
        console.log(this.queue);[1,2,3]
    }
}

let ids = new Allocator(4);
console.log(ids.allocate());
console.log(ids.allocate());
console.log(ids.release(3));


