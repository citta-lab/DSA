/**
 * 336. Palindrome Pairs
 * 
 * Given a list of unique words, return all the pairs of the distinct 
 * indices (i, j) in the given list, so that the concatenation of the 
 * two words words[i] + words[j] is a palindrome.
 * 
 * examples:
 * Input: words = ["abcd","dcba","lls","s","sssll"]
 * Output: [[0,1],[1,0],[3,2],[2,4]]
 * Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
 * 
 * leetcode:https://leetcode.com/problems/palindrome-pairs/
 * leetcode-question:336
 * 
 * Hint:
 * Bruteforce 
 * - Time:O(N^2 * k) where k is length of long word. Space:  O(N^2)
 * - two forloops
 * - i and j both starts at 0 
 * - if(i==j) continue
 * - concat words and check if it is palindrome and add
 * 
 * Optimal (HashMap)
 * 
 * 
 */


/***************************************************** 
 * 
 * Bruteforce:
 * Time:O(N^2 * k) where k is length of long word
 * Space:O(N^2)
 * 
 * Fails: with TLE
 * 
*****************************************************/

var palindromePairs = function(words) {
    
    let result = [];
    for(let i=0; i<words.length; i++){
        for(let j=0; j<words.length; j++){
            
            if(i === j) continue;
            
            let newWord = words[i]+words[j];
            let check = isPalindrome(newWord);
            
            if(check){
                result.push([i, j])
            }
        }
    }
    
    return result
};

function isPalindrome(newWord){
    let left = 0;
    let right = newWord.length-1;
    
    while(left <= right){
        if(newWord[left] !== newWord[right]){
            return false
        }
        
        left ++
        right--
    }
    
    return true;
}





/********************************************************
 * 
 * Optimal Using HashMap
 * Time: O(N x k^2) where k is length of longest word
 * Space: O(N)
 ********************************************************/
 const palindromePairs = words => {
	const map = new Map(); // reversed word: index
	const output = [];

	const isPalindrome = word => {
		let L = 0;
		let R = word.length - 1;

		while (L < R) {
			if (word[L] != word[R]) return false;

			L++;
			R--;
		}

		return true;
	};

	// reverse all words and add to map => reversed word: index
	const insertReversed = words => {
		for (let i = 0; i < words.length; i++) {
			const word = words[i];
			let reversed = '';

			for (let j = word.length - 1; j >= 0; j--) {
				reversed += word[j];
			}

			map.set(reversed, i);
		}
	};

	// empty string forms palindrome w/ every palindrome in the list
	const handleEmptyString = () => {
		if (map.has('')) {
			for (let i = 0; i < words.length; i++) {
				const idx = map.get('');

				if (idx === i) continue;
				if (isPalindrome(words[i])) output.push([idx, i]);
			}
		}
	};

	// match prefix AND suffix of current word
	// to reversed word and check if it makes a valid palindrome
	const findPalindromes = words => {
		for (let i = 0; i < words.length; i++) {
			const word = words[i];

			for (let j = 0; j < word.length; j++) {
				const prefix = word.slice(0, j);
				const suffix = word.slice(j);

				const prefixIdx = map.get(prefix);
				const suffixIdx = map.get(suffix);

				// if prefix is palindrome: suffix + words[i]
				if (map.has(suffix) && suffixIdx !== i) {
					const validPrefix = isPalindrome(prefix);

					if (validPrefix) output.push([suffixIdx, i]);
				}

				// if suffix is palindrome: words[i] + prefix
				if (map.has(prefix) && prefixIdx !== i) {
					const validSuffix = isPalindrome(suffix);

					if (validSuffix) output.push([i, prefixIdx]);
				}
			}
		}
	};

	insertReversed(words);
	handleEmptyString(map);
	findPalindromes(words);

	return output;
};