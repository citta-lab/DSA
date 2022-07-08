/**
 * This question is usually on a phone screen or a new graduate onsite.
    Design a hit counter to record the number of hits on a webpage for the last 5 minutes.
    Questions:
    1. Does this need to be threadsafe?
    2. Does the time window need to be resizeable?

    Details : https://github.com/insideofdrop/Dropbox-Interview-Prep/blob/main/code/hit_counter.py
 */

class HitCounter {
    constructor(){
        /** initialize for 5 mins = 5 * 60mins => 300 entries */
        this.hits = new Array(300).fill(0);
        this.times = new Array(300).fill(0);
    }

    hits(timeStamp){
        /** modulo of the value ( like load balacning technique ) */
        let index = timeStamp % 300; 

        /** check if we have already hit that time slot  */
        if(this.times[index] !== timeStamp){
            this.times[index] = timeStamp;
            this.hits[index] = 1
        } else {
            /** count number of times we hit on same time  */
            this.hits[index] += 1;
        }
    }

    getHits(timeStamp){
        let total = 0;
        for(let i=0; i<this.times.length; i++){
            let index = i;
            let time = this.times[index];

            if(timeStamp-time < 300){
                total = this.hits[index];
            }
        }

        return total;
    }
}
