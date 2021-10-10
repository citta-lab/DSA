/** 
 * #1 
 * Manupulating an object values to "something" new and then returning an manipulated object
 * without altering the order of keys.
 * 
 * Example: 
 * const prices = { 'pen': 2, 'book': 3.5, 'mice': 13, 'marker': 1.75 } 
 * needs to get updated with tax. Imagine we have a taxCal helper does the work for us.
 * Result would be { pen: 2.125, book: 3.71875, mice: 13.8125, marker: 1.859375 }
 * */

 // helper function
const taxCal = (price) => price + (price * 6.25) / 100; 

// given data
const prices = { 'pen': 2, 'book': 3.5, 'mice': 13, 'marker': 1.75 };

// manipulating the data with map which returns [[item, newPrice]]
const pricesMap =  Object.entries(prices)
    .map(([item, price]) => [ item, taxCal(price)]);

// converting back to object key,value from an array
const pricesObj = Object.fromEntries(pricesMap);
console.log(pricesObj);


/**
 * #2 
 * Manupulate the given object of numbered lego blocks and it's dependecy as unique lego numbered 
 * items so we know what are all the lego numbered blocks we need and initialize them to zero so 
 * we can update the order count later.
 * 
 * const legoBuildSequence = {
    9: [8, 7, 6],
    8: [4,5],
    7: [3],
    6: [2],
    5: [2, 1],
    4: [1],
    3: [1]
}

result: { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 }
*/

 // given data
const legoBuildSequence = {
    9: [8, 7, 6],
    8: [4,5],
    7: [3],
    6: [2],
    5: [2, 1],
    4: [1],
    3: [1]
}

// returns all items (i.e key, value) as unique key's 
const buildNumberHash = (obj, hash={}) => {
    // Object.entries(obj) returns [[key, value]]
    Object.entries(obj).forEach(([key, valueArray]) => {
        if(!hash[key]) hash[key] = 0;
        valueArray.forEach(value => {
            if(!hash[value]) hash[value] = 0;
        })
    })

    return hash;
}

// { '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0 }
console.log(buildNumberHash(legoBuildSequence))

// if the shop owners wants count of each number blocks required to build a lego
const buildNumberCountHash = (obj, hash={}) => {
    Object.entries(obj).forEach(([key, valueArray]) => {
       if(!hash[key]){
           hash[key] = 0
       }else{
           hash[key] = hash[key] + 1;
       }
        valueArray.forEach(value => {
            if(!hash[value]){
                hash[value] = 1
            }else{
                hash[value] = hash[value] + 1;
            }
        })
    })

    return hash;
}

// { '1': 3,'2': 2,'3': 1,'4': 1,'5': 1,'6': 1,'7': 1,'8': 1,'9': 0 }
console.log(buildNumberCountHash(legoBuildSequence))