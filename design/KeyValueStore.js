/**
 * Coding: Implement a key-value store with history (through timestamps).
 * one key can be set multiple times at different timestamp. 
 * you have to preseve all value in the store (see example below )
 * Implement
 * Set(int key) -- set a key
 * Get(int key, int timestamp) -- return the key at that timestamp
 * Get(int key) -- return the latest timestamp key 
 * 
 * 
 * Question:
 * - Can you call set ?
 * - Can you call get ?
 * - How can we handle get when two key has same time-stamp ?
 */

 class TimeMap {
    constructor(){
        this.map = new Map();
    }

    set(key, value, timestamp){
        /** check if we have a key stored already */
        let valueArr = this.map.get(key) || [];

        /** push new value,timestamp to valueArr */
        valueArr.push({ value, timestamp});

        /** set the value back to key */
        this.map.set(key, valueArr);
    }

    get(key, timestamp){

        /** return nothing if we didnt find */
        if(!this.map.has(key)) return '';

        let valueArr = this.map.get(key);
        let index = binarySearch(valueArr, timestamp);
        if(index === -1) return '';
        if(index >= 0) return valueArr[index].value;

        /** use previous value from the array. i.e last set value */
        console.log(" now index is : "+index+ " but will add -2: "+(-index-2)+ " value :"+valueArr[-index-2].value)
        
        /** 
         now index is : -2 but will add -2: 0 value :bar
         now index is : -3 but will add -2: 1 value :bar2
         */ 
        
        return valueArr[-index-2].value; 
    }
}

const binarySearch = (arr, timestamp) => {
    let left = 0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid].timestamp === timestamp) return mid; 

        /** if the timestamp is less then we focus on left of bs */
        if(arr[mid].timestamp > timestamp) right = mid - 1;

        /** if the timestamp is greater than in arr we focus on right of bs */
        if(arr[mid].timestamp < timestamp) left = mid + 1;
    }

    /** will return -2, -3 which then be negated before adding -2 in finding the last added value */
    return -left -1
}
