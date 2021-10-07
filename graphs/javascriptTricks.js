/** 
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
const pricesMap = 
    Object.entries(prices)
    .map(([item, price]) => [ item, taxCal(price)]);

// converting back to object key,value from an array
const pricesObj = Object.fromEntries(pricesMap);
console.log(pricesObj);