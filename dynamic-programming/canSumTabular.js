
//O(m*n) time and O(m) space as array is built basede on target
const canSumTabular = (target, array) => {
 // we need to return True or false if we can find canSum
 const store = new Array(target+1).fill(false);
 
 // base condition i.e if the target is 0 then it means we can return nothing from an array which makes 0 sum 
 store[0] = true;

 for(let i=0 ; i<= target; i ++){
    let isTrue = store[i];
    if(isTrue){
        for(let num of array){
            //if first element is True then any number from this "might" also be true so it can make target sum
            store[i+num] = true
        }
    }
 }

 return store[target]
}


console.log(canSumTabular(7, [5,2,1]))
console.log(canSumTabular(7, [5,3,9,17,99]))