/**
 * given a target string, find all posible combination of words from wordBank which forms target
 * target = 'mahesh'
 * wordBank = ['ma', 'mah', 'es', 'h', 'ef];
 */

 /** O(n^m ) time however m^2 can we the time for slice and map but is ignored as O(n^m) is exponetial and rest can be ignored
  *  O(m) as we will ignore exponential factor of storge as it doesn't truely represent the space complexity
  */
 const getAllContruct = (target, wordBank) => {
     if(target === '') return [[]];

     const finalResult = [];
     for(let word of wordBank){ // 'ma', 'h', 'es', 'h'
         let prefix = target.indexOf(word);
         if(prefix === 0){
             let subTarget = target.slice(word.length); //'hesh', 'esh', 'h'
             let result = getAllContruct(subTarget, wordBank); 
             console.log(result)
             let addWord = result.map((arr) => [word, ...arr]);
             finalResult.push(...addWord)
         }
     }

     return finalResult;
 }

 console.log(getAllContruct('mahesh', ['ma', 'mah', 'es', 'h', 'ef']))
