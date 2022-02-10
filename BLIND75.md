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

## 4. [Container With Most Water](https://github.com/citta-lab/DSA/blob/main/dp/11.container-with-most-water.js)

    - use TWO pointers. start left at the begining and right at the end
    - calculate area everytime inside while loop and update to maxArea only if it's more
    - Area = length of shorter vertical line * distance between lines
    - i.e `let area = min(height[left], height[right]) * (right - left);`
    - move left or right if one of them is less than or equal to other one.

## 5. [3Sum](https://github.com/citta-lab/DSA/blob/main/arrays/15.3sum.js)

    - break this problem into a loop problem plus two sum sorted array problem
    - Result array shouldn't have same element in same position in the result set ( still confused )
    - we sort the array so we can array TWO SUM sorted array method
    - if we find same elements in consecutive postion, we skip both in outer loop & in TWO SUM logic
    - i.e skip in outerloop: `if(iThElement === nums[i-1]) { continue }`
    - i.e skip inside TWO SUM: `while(leftElement === nums[left-1]) { left ++ }`

## 6. [Remove Nth Node From End of List](https://github.com/citta-lab/DSA/blob/main/linkedList/19.remove-nth-from-end-linkedList.js)

    - TWO pointers slow and fast start at dummy
    - use DUMMY and dummy.next = head
    - move fast, n+1 times so our slow will be one step behind the nth element
    - second while loop should just check fast if we have done n+1 times fast. i.e `while(fast){...}`
    - return dummy.next instead of head so we can solve problems with just one element
