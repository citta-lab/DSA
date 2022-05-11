/**
 * 
 * 981. Time Based Key-Value Store
 * 
 * Design a time-based key-value data structure that can store multiple values for the same key at different 
 * time stamps and retrieve the key's value at a certain timestamp.
 * 
 * Implement the TimeMap class:
 * TimeMap() Initializes the object of the data structure.
 * void set(String key, String value, int timestamp) Stores the key key with the value value at the given time timestamp.
 * String get(String key, int timestamp) Returns a value such that set was called previously, 
 * with timestamp_prev <= timestamp. If there are multiple such values, it returns the value associated with the largest
 *  timestamp_prev. If there are no values, it returns "".
 * 
 * Example:
 * Input
 * ["TimeMap", "set", "get", "get", "set", "get", "get"]
 * [[], ["foo", "bar", 1], ["foo", 1], ["foo", 3], ["foo", "bar2", 4], ["foo", 4], ["foo", 5]]
 * Output
 * [null, null, "bar", "bar", null, "bar2", "bar2"]
 * 
 * leetcode-question:981
 * leetcode:https://leetcode.com/problems/time-based-key-value-store/
 * alternative ref: https://leetcode.com/problems/time-based-key-value-store/discuss/939521/Two-JS-Solutions%3A-different-space-complexities
 * 
 * Hint:
 * - Using Map & Binary Search ( if timestamp is in increasing order )
 * - Time: O(logN) Space:O(N)
 * - Map can hold array of value, timestamp pair in key
 * - While getting we do binary search to find the exact timestamp user is asking 
 * 
 * - Using Map and Linear Search ( if timestamp is not in increasing order)
 * - Time: O(N) and Space:O(N)
 */

/** Time:O(logN) and Sapce:O(N) */
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
