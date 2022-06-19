/**
 * Allocate ID / Phone Directory
 * 
    Things to consider:
    what happens if all IDs used up? throws Exception or return -1
    release invalid ID or release id that is not allocated, how to handle? just return or throw Exception??
    what happens if all IDs used up? throws Exception or return -1
    release invalid ID or release id that is not allocated, how to handle? just return or throw Exception??
 */

/** Time:O(1) and Space:O(N) */
class Allocator {
    constructor(maxID){
        this.freeList = []; // queue here but linkedList would be better
        this.allocated =  new Set(); 
        this.maxID = null;

        this.callAllocator(maxID);
    }

    callAllocator(maxID){
        this.maxID = maxID;
        for(let i=0; i<maxID; i++){
            this.freeList.push(i);
        }
    }

    allocate(){
        if(!this.freeList.length) return -1;
        let id = this.freeList.pop();
        this.allocated.add(id);
        return id;
    }

    release(id){
        if(id < 0 || id >= this.maxID) return ;
        if(!this.allocated.has(id)) return;

        this.allocated.delete(id); // removing from the set
        this.freeList.push(id); // add to queue as we freed 
    }

    /** helpers */

    check(id){
        if(id < 0 || id >= this.maxID) return false;
        return this.allocated.has(id);
    }

    printAll(){
        console.log(" Allocated : "+ Array.from(this.allocated));
        console.log(" Freed : "+ this.freeList);
    }
}


let allocator = new Allocator(10);
let id1 = allocator.allocate();
let id2 = allocator.allocate();
let id3 = allocator.allocate();

console.log(allocator.check(id1));
console.log(allocator.check(id2));
console.log(allocator.check(id3));

console.log(allocator.printAll())

allocator.release(id2);
console.log(allocator.check(id2));


/** Currently, we can only store a vector of 8 bits. To go beyond this limitation, 
 * we just have to use an array of bytes, instead of a single byte, that's it! 
 * 
 * https://www.baeldung.com/java-bitset
 * */

 class Allocator {
    constructor(maxID){
        this.maxID = maxID;
        this.bitSet = new BitSet(maxId*2-1);
        // this.callAllocator(maxID);
    }

    // callAllocator(maxID){
    //     this.maxID = maxID;
    //     for(let i=0; i<maxID; i++){
    //         this.freeList.push(i);
    //     }
    // }

    allocate(){
       let index = 0;
       
       while(index < this.maxID-1){
        if(!this.bitSet.get(index*2+1)){
            index = index * 2 +1;
        } else if(!this.bitSet.get(index*2+2)){
            index = index*2+2;
        } else {
            return -1
        }
       }

       this.bitSet(index);
       updateTree(index);

       return index - this.maxID+1;

    }

    release(id){
        if(id < 0 || id >= this.maxID) return ;
        if(!this.allocated.has(id)) return;

        this.allocated.delete(id); // removing from the set
        this.freeList.push(id); // add to queue as we freed 
    }

    /** helpers */

    check(id){
        if(id < 0 || id >= this.maxID) return false;
        return this.allocated.has(id);
    }

    printAll(){
        console.log(" Allocated : "+ Array.from(this.allocated));
        console.log(" Freed : "+ this.freeList);
    }
}