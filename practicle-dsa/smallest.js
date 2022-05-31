function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let numbers = new Set();
    for(let a of A){
        numbers.add(a)
    }

   let max = Math.max(...A);
   for(let i=1; i<=max; i++){
       if(!numbers.has(i)){
           return i
       }
   }

   return max <= 0 ? 1 : max+1
}

let result = solution([1, 3, 6, 4, 1, 2])
console.log(result)

result = solution([-1, -3])
console.log(result)
