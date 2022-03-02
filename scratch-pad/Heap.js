class Heap{
    constructor(){
        this.data = [];
    }

    getParentIndex(index){
        return Math.floor((index-2/2));
    }

    getLeftChildIndex(index){
        return index*2 + 1;
    }

    getRightChildIndex(index){
        return index*2 + 2;
    }

    swap(indexOne, indexTwo){
        let temp = this.data[indexOne];
        this.data[indexOne] = this.data[indexTwo];
        this.data[indexTwo] = temp;
    }

    push(value){
        this.data.push(value); // add at the end
        this.heapifyUp();
    }

    // [7,5,4,6] <-- 9
    heapifyUp(){

        let currentIndex = this.data.length-1;

        while(this.data[this.getParentIndex(currentIndex)] < this.data[currentIndex]){
            this.swap(this.getParentIndex(currentIndex), currentIndex);
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    poll(){
        let resultValue = this.data[0];
        this.data[0] = this.data[this.data.length-1]; // gets the last element 
        this.data.length --
        this.heapifyDown();

        return resultValue;
    }

    heapifyDown(){
        let currentIdx = 0; /** index of top element */

        /** 
         * Step 0: find if we have left child as our binary heap must have left child otherwise it is empty
         * Step 1: find biggest child between left and right
         * Step 2: swap current value with biggest value using swap and passing index
         * Step 3: update current to the latest biggest value we swapped with so we can keep checking
         */

        while(this.data[this.getLeftChildIndex(currentIdx)]){
            let biggestChildIdx = this.getLeftChildIndex(currentIdx);

            if(this.data[this.getRightChildIndex(currentIdx)] 
            && this.data[this.getRightChildIndex(currentIdx)] > this.data[this.getLeftChildIndex(currentIdx)]){
                biggestChildIdx = this.getRightChildIndex(currentIdx);
            }

            if(this.data[currentIdx] < this.data[biggestChildIdx]){
                this.swap(currentIdx, biggestChildIdx);
                currentIdx = biggestChildIdx;
            }else{
                return
            }

        }

    }

}

let heap = new Heap();
heap.push(25)
heap.push(5)
heap.push(40)
heap.push(70)
heap.push(90)
heap.push(44)

console.log(heap.data.join(','));

let a = [];
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());
a.push(heap.poll());

console.log(a)