/**
 * 
 * 468. Validate IP Address
 * 
 * Given a string queryIP, return "IPv4" if IP is a valid IPv4 address, "IPv6" if IP is a 
 * valid IPv6 address or "Neither" if IP is not a correct IP of any type.
 * A valid IPv4 address is an IP in the form "x1.x2.x3.x4" where 0 <= xi <= 255 and xi cannot contain 
 * leading zeros. For example, "192.168.1.1" and "192.168.1.0" are valid IPv4 addresses while "192.168.01.1",
 * "192.168.1.00", and "192.168@1.1" are invalid IPv4 addresses.
 * 
 * A valid IPv6 address is an IP in the form "x1:x2:x3:x4:x5:x6:x7:x8" where:
 * 1 <= xi.length <= 4
 * xi is a hexadecimal string which may contain digits, lowercase English letter ('a' to 'f') 
 * and upper-case English letters ('A' to 'F').
 * Leading zeros are allowed in xi.
 * For example, "2001:0db8:85a3:0000:0000:8a2e:0370:7334" and "2001:db8:85a3:0:0:8A2E:0370:7334" 
 * are valid IPv6 addresses, while "2001:0db8:85a3::8A2E:037j:7334" 
 * and "02001:0db8:85a3:0000:0000:8a2e:0370:7334" are invalid IPv6 addresses.
 * 
 * Example:
 * Input: queryIP = "172.16.254.1"
 * Output: "IPv4"
 * 
 * Input: queryIP = "2001:0db8:85a3:0:0:8A2E:0370:7334"
 * Output: "IPv6"
 * 
 * Input: queryIP = "256.256.256.256"
 * Output: "Neither"
 * 
 * Input: queryIP = "2001:0db8:85a3:00000:0:8A2E:0370:7334"  <--- where sub str length is less than 4
 * Output: "Neither"
 * 
 * Input: queryIP = "1e1.4.5.6"    <--- sub str has char rather than digits
 * Output: "Neither"
 * 
 * Hint:
 * Divide and Conquer 
 * - Time:O(N) and Space:O(1)
 * 
 * 
 * Similar Question : IP to CIDR ( https://leetcode.com/problems/ip-to-cidr/)
 */
 var validIPAddress = function(queryIP) {
    
    const IPv4 = queryIP.split('.');
    const IPv6 = queryIP.split(':');
    
    if(IPv4 && IPv4.length === 4) return validateIPv4(IPv4);
    if(IPv6 && IPv6.length === 8) return validateIPv6(IPv6);
    
    return "Neither"
};

function validateIPv4(arr){
    for(let str of arr){
        
        if(!str || str.length < 0 || str.length > 3) return "Neither";
        if(str.length !== 1 && str.charAt(0) === '0') return "Neither";
        
        /** check if the str doesnt contain char but only digits */
        let result = containsChar(str);
        if(result) return "Neither"
        
        /** instead of above we can do regex */
        // if(!(/^\d+$/.test(n))) return false;
        
        let num = parseInt(str);
        if(num < 0 || num > 255) return "Neither";
    }
    
    return "IPv4"
}

function validateIPv6(arr){
    let hexaDigit = '0123456789abcdefABCDEF';
    for(let str of arr){
                    
        /** check if the length is in limit */
        if(str.length == 0 || str.length > 4) return "Neither";
        
        /** check if each char belongs to hexaDigit */
        for(let char of str){
            if(hexaDigit.indexOf(char) === -1) return "Neither"
        }
    }
    
    return "IPv6";
}

function containsChar(str){
    for(let char of str){
        /** char code for A...Z*/
        if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90){
            return true;
        }
            
        /** char code for a...z*/
        if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122){
            return true;
        }
    }
    
    return false;
}