/**
 * Implememt HashTable on 09/12/2021
 * 
 * HashMap or HashTables are something which uses dynmaic array underneath to store 
 * the keyvalue pair using special hash algorithm and potentially linked list to avoid 
 * key collision.
 */

function hashKey(key, arraySize) {
    let hashValue = 3;
    key.split('').forEach((_, i) => {
        hashValue = hashValue + key.charCodeAt(i)
    });

    return hashValue % arraySize;
}


class HashTable {

    hashArray = new Array(2);
    
    set(key, value) {
        const index = hashKey(key, this.hashArray.length);
        //console.log(index)
        if(this.hashArray[index]){
            this.hashArray[index].push([key, value]);
        }else{
            this.hashArray[index] = [[key, value]];
        }

        /** this will get overwritten if we dont handle collision due to hashKey function */
        
    //    console.log(this.hashArray);
    };

    get(key) {
        const keyIndex = hashKey(key, this.hashArray.length);

//        console.log(keyIndex);
  //      console.log(this.hashArray[keyIndex])
        if (!this.hashArray[keyIndex]) {
            return null;
        }
    
        return this.hashArray[keyIndex].find((element) => element[0] === key)[1]  // this.hashArray[keyIndex] returns [key,value] and hence [1] to get value
    }

    getArray (){
        return this.hashArray
    }
}




/** TEESTING  BELOW */
const names = new HashTable();
names.set('first', 1212121212 );
names.set('second', 3323232323);
names.set('third', 2323232323);
names.set('fourth', 9 );
names.set('fifth', 923232323 );

console.log(names.getArray())


//names.get('bob');
// console.log(names.get('Mahesh'));
console.log(names.get('first'));
//console.log(names.get('MAHESH'));
console.log(names.get('fifth'));
