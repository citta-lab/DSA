/**
 * 
 * Server names consist of an alphabetic host type (e.g. "apibox") concatenated
 * with the server number, with server numbers allocated as before (so "apibox1", 
 * "apibox2", etc. are valid hostnames).
 * 
 * Write a name tracking class with two operations, allocate(host_type) and deallocate(hostname).
 * The former should reserve and return the next available hostname, while the latter should 
 * release that hostname back into the pool.
 * 
 * For example:
 * >> tracker = Tracker()
 * >> tracker.allocate("apibox")
 *  "apibox1"
 * >> tracker.allocate("apibox")
 * "apibox2"
 * >> tracker.deallocate("apibox1")
 * nil
 * >> tracker.allocate("apibox")
 * "apibox1"
 * >> tracker.allocate("sitebox")
 * "sitebox1 
 * >> tracker.allocate("#$@%")
 */

class Tracker {
    constructor(){
        this.hosts = new Map();
    }

    printMap(){
        console.log(this.hosts)
    }

    allocate(hostType){
        
        /** default it to empty array if we dont have it initialized */
        if(!this.hosts.has(hostType)) this.hosts.set(hostType, []);
        
        /** helper to find the next server number */
        let nextNumber = this.nextServerNumber(this.hosts.get(hostType));

        /** set it directly in map based on the value array returned from key */
        this.hosts.get(hostType).push(parseInt(nextNumber));
        return this.hosts.values();
    }

    deallocate(hostName){

        const [hostType, serverNumber] = this.parseHostName(hostName);

        let filteredHosts = this.hosts.get(hostType)
        .filter((serverNum) => serverNum !== parseInt(serverNumber));

        // this works as we are setting new array
        this.hosts.set(hostType, filteredHosts);
        return '';
    }

    /** private method: goal is to find minimum server number we can use */
    nextServerNumber(serversArr){
        
        if(!serversArr.length) return 1;

        let maxServerNum = Math.max(...serversArr);
        for(let i=1; i<= maxServerNum; i++){
            // if we find the min available number, then return
            if(!serversArr.includes(i)){
                return i;
            }
        }

        // if we didnt find min, then return next max
        return maxServerNum + 1; 
    }

    parseHostName(hostName){

        let hostType = '';
        let serverNum = '';

        let size = hostName.length;
        for(let i=0; i<size; i++){
            /** if the charCode is between 48-57 then it is number between 0...9 */
            let charCode = hostName[i].charCodeAt(0); 
            
            if( charCode >= 48 && charCode <= 57 ){
                serverNum += hostName[i];
            }else{
                hostType += hostName[i];
            }
        }

        return [hostType, serverNum];
    }
}

let tracker = new Tracker();
console.log(tracker.allocate("apibox"));
console.log(tracker.allocate("apibox"));
tracker.printMap();
console.log(tracker.deallocate("apibox1"));
tracker.printMap();
console.log(tracker.allocate("apibox"));
console.log(tracker.allocate("sitebox"));
tracker.printMap();
console.log(tracker.deallocate("sitebox1"));
tracker.printMap();


