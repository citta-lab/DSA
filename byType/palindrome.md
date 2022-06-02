# Palindrome 

### 1. 680. Valid Palindrome II
Question: https://leetcode.com/problems/valid-palindrome-ii/     
Answer: https://github.com/citta-lab/DSA/blob/main/strings/680.valid-palindrome-II.js   
Hint: use count < 1 in while condition, create isPalindrome(s,left,right) func

### 2. 5. Longest Palindromic Substring
Question: https://leetcode.com/problems/longest-palindromic-substring/   
Answer: https://github.com/citta-lab/DSA/blob/main/strings/005.longest-palindromic-substring.js   
Hint: start left,right at 0 but move then outward. use for loop and then two
whileloops one for even, one for odd

### 3. 9. Palindrome Number   
Question: https://leetcode.com/problems/palindrome-number/       
Answer: https://github.com/citta-lab/DSA/blob/main/math/009.palindrome-number.js

### 4. 234. Palindrome Linked List
Question: https://leetcode.com/problems/palindrome-linked-list/submissions/   
Answer: https://github.com/citta-lab/DSA/blob/main/linkedList/234.palindrome-linked-list.js      
Hint: if we split linkedList by half, reverse secondHalf, then compare will
yiled in O(1) space

### 5. 647. Palindromic Substrings
Question: https://leetcode.com/problems/palindromic-substrings/   
Answer: https://github.com/citta-lab/DSA/blob/main/strings/647.palindromic-substrings.js   
Hint: can we done similar to longest palindrome substring using two
whileloop || call backtrack in forloop fpr every char combination.

### 6. 131. Palindrome Partitioning
Question: https://leetcode.com/problems/palindrome-partitioning/    
Answer: https://github.com/citta-lab/DSA/blob/main/backtracking/131.palindrome-partitioning.js     
Hint: backtracking with forloop ( similar to path problems )

### 7. 1328. Break a Palindrome
Question: https://leetcode.com/problems/break-a-palindrome/       
Answer: https://github.com/citta-lab/DSA/blob/main/strings/1328.break-a-palindrome.js
Hint: change non 'a' char to 'a' in first half.

### 8. 266. Palindrome Permutation
Question: https://leetcode.com/problems/palindrome-permutation/    
Answer: https://github.com/citta-lab/DSA/blob/main/strings/266.palindrome-permutation.js   
Hint: map and count all chars. increment counter when odd, decrement
when even. Finally. if counter <= 1 then we are good

### 9. 516. Longest Palindromic Subsequence
Question: https://leetcode.com/problems/longest-palindromic-subsequence/  
Answer: https://github.com/citta-lab/DSA/blob/main/strings/516.longest-palindromic-subsequence.js  
Hint: Similar to make palindrome after removing k elements

### 10. 1216. Valid Palindrome III ( remove k elements )
Question: https://leetcode.com/problems/valid-palindrome-iii/    
Answer: https://github.com/citta-lab/DSA/blob/main/strings/1216.valid-palindrome-III.js          
Hint: recursion with memo where we need to call recursion when we find match, or
call recursion on left, right when char does't match 

### 11. 336. Palindrome Pairs
Question: https://leetcode.com/problems/palindrome-pairs/      
Answer: https://github.com/citta-lab/DSA/blob/main/arrays/336.palindrome-pairs.js    
Hint: Optimal one with HashMap. Revesered word & it's index is stored in hashmap.
handle empty string, then find palindrome by `left, remaining` check. `remaining, right` check



