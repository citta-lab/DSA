
/**
 * O(nlogn) time for sorting an array everytime we need to sort based on the comparator
 * O(n) for space
 */
class NaivePriorityQueue {
    constructor(comparator){
        this.comparator = comparator;
        this.queue = []; /** <-- O(N) space */
    }

    add(value){
        this.queue.push(value);
        this.queue.sort(this.comparator); /** <-- O(nlogn)  time */
    }

    get(){
        if(this.queue.length <= 0) return null;
        return this.queue.shift(); /** <-- O(n) time as array elements needs to be reshuffled */
    }

    printQueue(){
        return this.queue;
    }
}

const pq = new NaivePriorityQueue((a,b) => b.rank - a.rank);
pq.add({name: 'danny', rank:2});
pq.add({name: 'bob', rank:23});
pq.add({name: 'james', rank:3});
pq.add({name: 'adam', rank:10});

console.log(pq.printQueue());
console.log(pq.get()); // 23
console.log(pq.get()); // 10
console.log(pq.get()); // 3
console.log(pq.printQueue()); // [{name: danny, rank:2}]

