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

## 7. [Valid Parentheses](https://github.com/citta-lab/DSA/blob/main/strings/20.isValid-string.js)

    - use hashmap for storing brances where key is closed brace and value is open brace.
    - i.e `let hash = { ')':'(', ']':'[', '}','{' }`
    - use stack where we will only add open brances
    - if we are processing closing brance then check corresponding open brance from hash and
    last element in stack are equal. If so we pop item from stack.
    - if stack is empty at the end then we had valid parentheses stack.length === 0 as answer.
    - Note: if we get just ']' as input then this fails so we need to have else check
     which return false when we are processing closing brace and stack/empty
     last item doesnt match

## 8. [Merge Two Sorted Lists](https://github.com/citta-lab/DSA/blob/main/linkedList/21.merge-two-sorted-recursion-linkedList.js)

    - use dummy and we will compare list1 and list2, then add pointer to dummy
    - also have another pointer head/root pointing to dummy. so we can return head.next
    - after every comparision we need to move either list1 or list2 and dummy.
    - do last check to make sure we didn't leave anything in either list.
    - i.e `return dummy.next = list1 ? list1 : list2`

## 9. [Merge k Sorted Lists](https://github.com/citta-lab/DSA/blob/main/linkedList/merge-k-sorted-linkedList.js)

    - instead of two sorted linkedlist we have K number of linkedList

    - Approach 1 (Not Optimal): time: O(N*K) where N is size of linkedList, K is number of linkedList and space: O(1)
    -- we merge two linkedList at a time in order
    -- create mergeTwoSorted function. which returns head for merged two list
    -- for first time, apply `mergeTwoSorted` on `lists[0]` and `lists[1]`.
    -- use for loop starting at `i=2` and use the head from above and repeat `mergeTwoSorted(head, lists[i])`
    -- do `if(!l1 && !l2) return dummy.next;` check in mergeTwoSorted for input like `[[]]`

    - Approach 2: time: O(NlogK) and space: O(1)
    -- we merge two linkedList at a time but in pairs. Then we run merge again on those results.
    -- will make use of mergeTwoSorted function which returns head for merged two lists
    -- we will call mergeTwoSorted until we are left with one linkedList in lists
    -- i.e `while(lists.length > 1) { .... }`
    -- we make use of tempMergedLists=[] to hold merged lists for every for loop, then assing
    tempMergedLists to lists. i.e 'lists = tempMergedLists` at the end of for loop.
    -- we call mergeTwoSorted function with pairs i.e `for(let i=0; i<lists.length; i=i+2)`

## 10. [Search in Rotated Sorted Array](https://github.com/citta-lab/DSA/blob/main/arrays/33.search-in-rotated-sorted-array.js)

    - Naive way is loopig and finding in O(N) time. But we need to do in O(logN)
    - we can use Binary Search concept on sorted array and use if conditions to direct which way
    the search needs to go as we dont have PERFECT sorted array
    - write down BS for sorted array and call from parent like `return bs(nums, target, 0, nums.length-1)`
    - if for some reason we find our target value LOWER than sorted array's left most value,
     we call binary search on right side of the MID
    - if for some reason we find our target value GREATER than sorted array's right most value,
     we call binary search on left side of the MID
    - also have normal binary search calling when target is less than mid, we go binary search
     on left side and if target is more than mid then we go binary search on right side

## 11. [Combination Sum](https://github.com/citta-lab/DSA/blob/main/arrays/39.combination-sum.js) 
[Ans: Diagram Solution](https://github.com/citta-lab/DSA/blob/main/a-assets/combination-sum.png)

    - Hence we cannot have same combination of elements in diff permutations
    the problem cannot be solved using two loops 
    - treat this as tree probelm, we can do BACKTRACKING to alter the combination
    by adding and removing via DFS.
    - Hence each element combination can be used manytimes once until we find TARGET or SUM exceeds target.  
    - At root of the tree we will have two choice, one with including the i'th 
    element in combination and another without including i'th element. 
    - we keep adding other elements to these until we reach base case.



## 12. [Rotate Image](https://github.com/citta-lab/DSA/blob/main/arrays/48.rotate-image.js)
[Ans: Diagram Solution](https://github.com/citta-lab/DSA/blob/main/a-assets/rotate-image.png)

    - treat this as problem (outer matrix) and sub problem (inner matrix )
    - we move value from top left -> top right -> bottom right --> bottom left and
    lastly top left.
    - so we need left,right boundry for column. top,bottom for row. 
    - instead of moving clockwise ( as mentioned in second point ). we move
    counter clock after saving TOP LEFT value in temp. Which will save having
    to hold other values in temp.
    - need for loop which runs uptp (r-l) range. This will help in moving pointers
    from left to right 

## 13. [Group Anagrams](https://github.com/citta-lab/DSA/blob/69c40de704c6ba27edc7954b80c8c445d1841237/strings/49.group-anagrams.js)
    -   Aproach 1: By Sorting Each String (Not Optimal: Time O(NMlogM))
    -- anagram strings will match when they are sorted. i.e eat & tea will be aet
    -- we go through each string, split them by space, sort them, join them to make a key
    -- use sorted string as key and actual string as values.
    -- loop though the hash to build resulting array

    -   Aproach 1: By Counting Characters from Each String (Time O(NM))
    -- anagram strings will match when they are sorted. i.e eat & tea will be aet
    -- go through each string and it's char's then build key using char's ASCII
    -- i.e `let count = new Array(26).fill(0)` 
    and count[`${char}`.charCodeAt(0) - 'a'.charCodeAt(0)] += 1; 
    -- store str with respect to 'count' key in hash
    -- loop through hash to get resulting array

## 14. [Maxium Subarray](https://github.com/citta-lab/DSA/blob/main/arrays/53.max-sub-array-sum.js)
    -   Appraoch 1: ( not optimal ) we could do using two forloop with 
    max value holder and sum. O(n^2)
    -   Appraoch 2: O(N) with same max and sum 
    -- will have one loop, but sum and max will have first element value to start with
    -- for loop will run from i=1, where sum will ONLY get updated when 
    `sum = Math.max(sum, sum+nums[i])`. this prevents it going less than current sum.
    -- max will be `max = Math.max(max, sum)`

## 15. [Spiral Matrix](https://github.com/citta-lab/DSA/blob/main/arrays/spiral-matrix.js)
    - we need 4 limiters 
    - rowStart = 0, rowEnd = matrix.length-1, colStart=0, colEnd=matrix[0].length-1;
    - we traverse in while loop as long as `while(rowStart <= rowEnd && colStart <= colEnd ){.}`
    - will have 4 for loops inside to control the directions 
    - imp: we need boundry check `if(rowStart > rowEnd || colStart > colEnd) break;` in place
    after first two for loops

## 16. [Jump Game](https://github.com/citta-lab/DSA/blob/main/dp-jump-game/55.jump-game.js)
    
    - appraoch 1: Dynamic Programming 
    -- brutforce will result in O(n^n) time but adding memo will reduce it to O(n^2) 
    -- brutforce is DP problem where main function will call helper function with index 0
    and input array. i.e `return jumpHelper(0, nums)`
    -- use `Map` instead of array for memo 

    - appraoch 2: Greedy ( going from back to first will result in time: O(n) )
    -- instead of going from start to destination (last). We can go from back
    -- every time we decrement `i` we check if we can reach the destination from given index
    -- i.e `if(i + maxJumpLength >= destination) { destination = i }` then we move destination
    closer
    -- check if our destination is at 0th index, if yes we can reach destination from start

## 17. [Merge Intervals](https://github.com/citta-lab/DSA/blob/main/arrays/56.merge-intervals.js)
    - If it is not sorted we will need to sort (O(logn)) AND total complexity is O(nlogn)
    - Add first element to result and loop from second element 
    - compare if new interating elements first item is LESS than last result elements second
    item. 
    - if yes then we merge. But we need to consider min of first position elements and maximum
    of second position elements i.e `result[result.length-1][1] = Math.max(rSecond, newSecond);`
    - if not we add iterating element to result, and move on 
    i.e `result.push([newFirst, newSecond])`

## 18. [Insert Interval](https://github.com/citta-lab/DSA/blob/main/arrays/57.insert-interval.js)
    - given intervals is already sorted so time:O(n)
    - while adding newInterval to sorted intervals we need to consider 3 things
    - # handle newInterval if it needs to be added at first and return updated result array
    -- i.e `return [...result, ...intervals.slice(i)];`
    - # handle adding interval form intervals to result if newInterval comes after
    - # handle merging newInterval until newInterval[1] is greater than interval[i][1]
    -- i.e we can keep updating 
    `newInterval = = [Math.min(first, newFirst), Math.max(second, newSecond)]`
    - # handle adding newInterval at the end of intervals if newInterval[1] is greater than tail
    
    
  ## 24. [Decode Ways](https://github.com/citta-lab/DSA/blob/main/graphs/91.decode-ways-dfs.js)
    - Tree combination can be used which will give 2^n time complexity as we have two choices to make every time
    -- 1st choice using just 1 char and second choice to use 2 char as we have valid code from 1 - 26
    - with dfs and memo we can solve this in O(n) time and space
    - we will call dfs with 0 index and initalize the MEMO with default `s.length : 1` as we need to return 1 if empty
    - if we find s starts with 0 then its invalid ( number ranges from 1-16 )
    - we will add dfs recursively only if second char pair satify range from 10-26
