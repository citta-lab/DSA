/** 
 * 
 * 125. Valid Palindrome 
 * 
 * A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
 * it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * Given a string s, return true if it is a palindrome, or false otherwise. 
 * 
 * Input: s = "A man, a plan, a canal: Panama"
 * Output: true
 * Explanation: "amanaplanacanalpanama" is a palindrome.
 * 
 * leetcode-question:125
 * leetcode:
 * 
 * HINT: we need to have regex as we will not know list of symbols used in the string.
 * we also need to ignore numbers.
 * 
 * */

 var isPalindrome = function(s) {

    /*** it will work if we know all the symbols before hand */
    //     let hash = {
    //         '.':'.',
    //         ',':',',
    //         ':':':',
    //         '@':'@',
    //         '#':'#',
    //         '..':'..',
    //         '"':'"',
    //         '/':'/',
    //         '|':'|',
    //     }
        
    //     let str = '';
    //     for(let char of s){
    //         let trimChar = char.trim();
    //         if(!hash[trimChar]){
    //             str += char.trim().toLowerCase();
    //         }
    //     };
        
        /** regex will remove symbols and convert it to lowercase */
        s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
            
        let left = 0;
        let right = s.length-1;
        while(left <= right){
            if(s[left] !== s[right]){
                return false;
            }
            
            left ++
            right --
        }
        
        return true;
        
    };


    /** ANOTHER SOLUTION without Regex */
    var isPalindrome = function(s) {
    
        if(!s) return true;
       
        let str = '';
        for(let char of s.split('')){
            if(char){
                let lower = char.toLowerCase();
                if(charCheck(lower)){
                    str = str + lower
                }
            }
        }
       
        let left = 0;
        let right = str.length-1; 
       
        while(right >= left){
            if(str[left] !== str[right]){
                return false;
            }
            
            left++
            right--
        }
       
        return true
   };
   
   function charCheck(input) {
           var input_char = input.charCodeAt(0);
            
           // CHECKING FOR ALPHABET
           if (
                (input_char >= 65 && input_char <= 90) ||
                (input_char >= 97 && input_char <= 122)
           ) { 
               return true 
           }
              
           // CHECKING FOR DIGITS
           else if (input_char >= 48 && input_char <= 57){
               return true
           }
              
           // OTHERWISE SPECIAL CHARACTER
           else return false;
   }

    console.log(isPalindrome('@p')); // true    
    console.log(isPalindrome('11p')); // false
    console.log(isPalindrome('baba')); // false
    console.log(isPalindrome('a#2b@a')); // false
    console.log(isPalindrome('aba')); // true
    