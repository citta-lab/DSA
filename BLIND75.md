# BLIND 75
## 1. [Two Sum](https://github.com/citta-lab/DSA/blob/main/arrays/1.two-sum.js)
    - use hash to store `num:index` while traversing
    - check `diff = target - num` exist in hash. i.e `hash[diff] >= 0`
    - if not store num:index in hash (not diff). i.e `hash[num] = index`

## 2. [Longest Substring Without Repeating Characters](https://github.com/citta-lab/DSA/blob/main/strings/3.longest-substring-strings.js)
    - use TWO pointers.
    - use set to keep track of all chars while traversing 
    - only move RIGHT until we found char in set. 
    - remove left char, move left pointer and repeat 

## 3. [Longest Palindromic Substring](https://github.com/citta-lab/DSA/blob/main/strings/5.longest-palindromic-substring.js)
    - use TWO pointers. But they move OUTWARD from start. <-- left right ---> 
    - Handle ODD and EVEN condition seperate 
    - Use forloop for traversing the chars one at a time for both ODD and EVEN while loops
    - ODD: assing left = index, right = index and check palindrome inside while loop
    - EVEN : assing left = index, right index+1 and check palindrome inside while loop
 