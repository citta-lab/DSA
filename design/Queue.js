/** Implement Queue and have insert and get methods to add and remove the data */

class Queue {
    constructor(size){
        this.size = size;
        this.queue = new Array(size);

        this.sizeCount = 0;
    }

    insert(value){
        if(this.sizeCount < this.size){
            this.queue.push(value);
        }
    }

    getFirst(){
        return this.queue.shift();
    }

    getLast(){
        return this.queue.pop();
    }
}