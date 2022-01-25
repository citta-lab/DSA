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


    console.log(isPalindrome('@p')); // true    
    console.log(isPalindrome('11p')); // false
    console.log(isPalindrome('baba')); // false
    console.log(isPalindrome('a#2b@a')); // false
    console.log(isPalindrome('aba')); // true
    