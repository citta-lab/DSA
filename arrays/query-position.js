/** 
 * Given an array of values, query values and query number return the poisition of 
 * query number in an array of values.
 * 
 * Example: 
 * array = [1,2,20,8,8,1,2,1,8,2] 
 * query_values = [100, 2,1,3]
 * query_number = 8
 * 
 * result = [-1, 5, 4, 9]
 * i.e finding 100th 8 position in an array which is out of bound so -1
 * finding 2nd 8 value position in an array which is 5 
 * finding 1st 8 value position in an array which is 4 etc
 */

 /**
  * O (n + m) time where n is array size and m is query_values size
  * O(n) space : worst case i need to store all array size elements as position
  */
 const positionQuery = (array, query_values, query_num) => {
     const positions = [];
     /** hold count:position as key/value pair so we can look up quick */
     const countPoisitionMap = {};

     /** build map with count:position  */
     let count = 0;
     for(let i=0; i<array.length; i++){
        const num = array[i];
        if(num === query_num){
            count++;
            // +1 becasue we are dealing with array index 0
            countPoisitionMap[count] = i + 1; 
        }
     }

     /** 
      * check query value for count'th value, find respective position from map & push 
      * to array. If count'th key is not found in the map then it must be out of bound
      * or we dont have array with those man query_number occurence so push -1
      * */
     for(let count of query_values){
        if(!countPoisitionMap[count]) positions.push(-1);
        if(countPoisitionMap[count]) positions.push(countPoisitionMap[count])
     }


     return positions;
 }

let array = [1,2,20,8,8,1,2,1,8,2] 
let query_values = [100, 2,1,3]
let query_number = 8
console.log(positionQuery(array, query_values, query_number));