/** 
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
 * lettcode : https://leetcode.com/problems/subdomain-visit-count/
 */

const subdomainVisits = (cpdomains) =>{
    
    let store = {};
    let result = [];

    for(let pairs of cpdomains){
        /** seperate value from subdomains */
        const[value, domain] = pairs.split(' ');
        
        const splitDomainByPoint = domain.split('.');
        const size = splitDomainByPoint.length - 1;

        /** by doing reverse we can do combinations like mail.com, .com etc */
        let subdomain = '';
        for(let i=size; i>= 0; i--){
            /** adding `.` if subdomain is not null so it will look like mail.com */
            subdomain = subdomain.trim().length > 0 ? `.${subdomain}` : subdomain;
            /** building the combination like com, mail.com */
            subdomain = splitDomainByPoint[i] + subdomain;
            
            /** counting if already exists */
            store[subdomain] 
            ? store[subdomain] = store[subdomain] + parseInt(value) 
            : store[subdomain] = parseInt(value); 
        }
    }

    /** builsing array from store */
    for(let key in store){
        let comb = `${store[key]} ${key}`;
        result.push(comb);
    }

    return result;

}

cpdomains = ["9001 discuss.leetcode.com"];
console.log(subdomainVisits(cpdomains)); // [ '9001 com', '9001 leetcode.com', '9001 discuss.leetcode.com' ]

cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"]
console.log(subdomainVisits(cpdomains)); // ["901 mail.com","50 yahoo.com","900 google.mail.com","5 wiki.org","5 org","1 intel.mail.com","951 com"]