/** 
 * 811. Subdomain Visit Count
 * 
 * Count number of possible subdomain combinations by given set of subdomains. Below is the example 
 * 
 * Input: cpdomains = ["9001 discuss.leetcode.com"]
 * Output: ["9001 leetcode.com","9001 discuss.leetcode.com","9001 com"]
 * Explanation: We only have one website domain: "discuss.leetcode.com".
 * As discussed above, the subdomain "leetcode.com" and "com" will also be visited. 
 * So they will all be visited 9001 times.
 * 
 * Input: cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
 * Output: ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]
 * 
 * leetcode-question:811
 * lettcode : https://leetcode.com/problems/subdomain-visit-count/
 * 
 * Optimization:
 * array.split(' ') adds more time complexity as
 * split() has to find all occurrences of " ", then allocate an array of 
 * the appropriate size, then put substrings into the Array.
 * 
 * Example:
 * let str = '900 discuss.leetcode.com';
 * let index = s.indexOf(' '); // 3
 * let count = s.substring(0, index); // 900
 * let domain = s.substring(index); // discuss.leetcode.com
 * 
 */

 /** Time: O(N) time and O(N) space where N is number of  cpdomains */
 var subdomainVisits = function(cpdomains) {
    
    /** will use this to store domain:count mapping for all combination */
    let hash = {}; 
    
    for(let domain of cpdomains){
        /** Step 1: seperate value and domain */
        let [count, s] = domain.split(' '); /** count=9001 s=discuss.leetcode.com */
        
        /** Step 2 : split by . to make combination */
        let stringArr = s.split('.'); /** ['discuss', 'leetcode', 'com'] */
        
        /** Step 3 : loop splitted array and traverse from back to make combination */
        let strBuilder = '';
        for(let i=stringArr.length-1; i>=0; i--){
           
            /** we need to add '.' if we have value already otherswise we do nothing */ 
            strBuilder = strBuilder.trim().length > 0 
            ? `.${strBuilder}`
            : strBuilder;
            
            /** add new word to front to make combination */
            let word = stringArr[i];
            strBuilder = word + strBuilder;
            
            /** check hash to see if we have string already to add count vs initialize */
            if(!hash[strBuilder]){
                hash[strBuilder] = parseInt(count);
            }else{
                hash[strBuilder] = hash[strBuilder] + parseInt(count);
            }
        }
        
       
    }
    
    let result = [];
    Object.keys(hash).forEach((key) => {
        let ret = `${hash[key]} ${key}`;
        result.push(ret);
    });
    
    console.log(result);
    return result;
};

cpdomains = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(cpdomains)); // [ '9001 com', '9001 leetcode.com', '9001 discuss.leetcode.com' ]

cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
console.log(subdomainVisits(cpdomains)); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]