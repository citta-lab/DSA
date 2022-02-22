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

## 21. [Set Matrix Zeroes](https://github.com/citta-lab/DSA/blob/main/linkedList/206.reverse-linkedList.js)

    - Second Optimal: Time: O(m*n) and Space: O(m+n) using two 1-D array (rowArray, colArray) to hold
    the values corresponding to matrix[row][col].
    -- first time for loop to update rowArray and colArray based on matrix cell values
    -- second time for loop to update the matrix based on rowArray and colArray matching cell values

    - Best Optimal : Time: O(n*m) and Space: O(1) using one variable to hold matrix[0][0] value and
    using first row and column as reference to update the rest of the matrix.
    -- instead of using rowArray and colArray we use matrix's first row and col as reference
    -- we will hold rowZero = false as default which will reflect matrix[0][0] value
    -- we will do three update process
    -- first to update the row/col values based on first row and first col values
    -- second to update the row's first column values based on matrix[0][0] (i.e first cell)
    -- third to update the first column's first rows values if rowZero is true

## 24. [Decode Ways](https://github.com/citta-lab/DSA/blob/main/graphs/91.decode-ways-dfs.js)

    - Tree combination can be used which will give 2^n time complexity as we have two choices to make every time
    -- 1st choice using just 1 char and second choice to use 2 char as we have valid code from 1 - 26
    - with dfs and memo we can solve this in O(n) time and space
    - we will call dfs with 0 index and initalize the MEMO with default `s.length : 1` as we need to return 1 if empty
    - if we find s starts with 0 then its invalid ( number ranges from 1-16 )
    - we will add dfs recursively only if second char pair satify range from 10-26

## 25. [Validate Binary Search Tree](https://github.com/citta-lab/DSA/blob/main/binary-search-tree/98.validate-BST-in-order-recursive-tree.js)

    - In valid BST root value will be greater than left children and less than right children
    - If we are doing recursion, then have left and right min max value assigned like left = -Infinity and right = Infinity
    - validate if root.val will satisfy left < root.val < right
    - call left children and right children like `return  valid(root.left, left, root.val) &&  valid(root.right, root.val, right)'

## 26. [Same Tree](https://github.com/citta-lab/DSA/blob/main/binary-tree/100.same-tree.js)

    - time:O(n) and sapce:O(logN) in best and O(n) in worst
    - dfs and traversing both tree's together and comparing

## 27. [Binary Tree Level Order Traversal](https://github.com/citta-lab/DSA/blob/main/binary-tree/102.binary-tree-level-order-traversal-binary-tree.js)

    - time:O(n) and sapce:O(n)
    - Iterative method using bfs level order
    - use queue.shift() to pop first element and queue.push() to add element

## 28. [Maximum Depth of Binary Tree](https://github.com/citta-lab/DSA/blob/main/binary-tree/104.maximum-depth-in-binary-tree.js)

    - time:O(n) and sapce:O(n)
    - Iterative method using bfs level order
    - use queue.shift() to pop first element and queue.push() to add element
    - keep counter and increase it at the end of for loop

## 29. [Construct Binary Tree from Preorder and Inorder Traversal](https://github.com/citta-lab/DSA/blob/main/binary-tree/105.construct-binary-tree-from-preorder-and-inorder-traversal.js)

    - preorder is ROOT, LEFT, RIGHT
    - inorder is LEFT, ROOT, RIGHT
    - first element of preorder is always ROOT. So we can creare new tree node from
    this (i.e node = preorder.shift() )
    - finding index of node in inorder will help finding right and left part
    of new tree. (i.e pivot = inorder.indexOf(node))
    - root.left = buildTree(preorder, inorder(0, privot) and root.right = buildTre (preorder, inorder(pivot+1)

## 30. [Best Time to Buy and Sell Stock](https://github.com/citta-lab/DSA/blob/main/arrays/121.best%20-time-to-buy-and-sell-stock.js)

    - bruteforce can be done with two for loops with i=0, j=i+1 i.e O(n^2)
    - optimized can be done with O(n) by keeping minPrice and profit
    - we compare the current price is less than minPrice if so we assing price to minPrice and continue
    - if the current price is more than minPrice, then we calculate profit and keep max profit in check

## 31. [Binary Tree Maximum Path Sum](https://github.com/citta-lab/DSA/blob/main/binary-tree/124.binary-tree-maximum-path-sum.js)

    - we will need to calculate if we can find maximum value from root + left, or
    root + right or left + root + right.
    - we will keep maxSum and gets updated whenever we traverse however while
    traversing back we can only have either left + root or right + root.
    - final return in helper will be like `return Math.max(root.val + leftMax, root.val + rightMax)`
    - start `let maxSum = -Infinity;`

## 32. [Valid Palindrome](https://github.com/citta-lab/DSA/blob/main/strings/125.valid-palindrome.js)

    - use TWO POINTER with left = 0 and right = s.length-1. Move inward.
    - we will split, convert to lower and remove special char either using regex or charCodeAt() function.
    - regex => s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    - need to build helper and use `var input_char = input.charCodeAt(0);` then compare
    for `if (input_char >= 97 && input_char <= 122 || input_char >= 48 && input_char <= 57){ return true }`

## 33. [Longest Consecutive Sequence](https://github.com/citta-lab/DSA/blob/main/arrays/128.longest-consecutive-sequence.js)

[Ans: Diagram Solution](https://github.com/citta-lab/DSA/blob/main/a-assets/longest-consecutive-sequence.png)

    - Not Optilmal : sort and then have curLength, maxLength =1 and find maxLength by comparing
    - Optimal : using set we can look up if the given number in set has previous number.
    If not then it is the start of the range we calculate. If the numer has left or previous in
    the Set then we can assume it is not the start

## 34. [Clone Graph](https://github.com/citta-lab/DSA/blob/main/graphs/133.clone-graph-dfs.js)

    - we will apply dfs. time: O(m+n) and space: O(N) where N is depth os stack
    - use Map instead of Set so we can keep track of node -> cloneNode.
    -- i.e visited.set(node, clone) and we can check `visited.has(node) then return visited.get(node)`
    which will return pointer to respective clone rather than original node.
    - iterative over node's children and build cloneChild and push it to clone.childrens array.

## 35. [Word Break](https://github.com/citta-lab/DSA/blob/main/graphs/139.word-break.js)

    - we can solve this with recursion and memoization which will result in O(n^3) time
    - will need to use TWO POINTER in recursion
    - use Map for memo instead of array for Time Limit exceed exception
    - call helper(s, wordDict, 0, memo) and use forloop/while inside helper for finding substring with
    another pointer end = start + 1 ( to start with ).
    - OR we can also solve this in DP with memoization will result in O(n^3) as well

## 36. [Linked List Cycle](https://github.com/citta-lab/DSA/blob/main/graphs/139.word-break.js)

    - we can solve this with recursion and memoization which will result in O(n^3) time
    - will need to use TWO POINTER in recursion
    - use Map for memo instead of array for Time Limit exceed exception
    - call helper(s, wordDict, 0, memo) and use forloop/while inside helper for finding substring with
    another pointer end = start + 1 ( to start with ).
    - OR we can also solve this in DP with memoization will result in O(n^3) as well

## 36. [Reorder List](https://github.com/citta-lab/DSA/blob/main/linkedList/reorder-linkedList.js)

    - we need to do this in three steps. Find Mid, Reverse, Merge.
    - Find Mid: slow = node.next where fast = node.next.next
    - Reverse: future = cur.next; cur.next = prev; cur = future; prev = cur; and we return pre.
    - Merge: head = l1; tmp = l1.next; l1.next = l2; l1 = tmp. Similary tmp = l2.next; l2.next = l1; l2 = tmp.

## 38. [Maximum Product Subarray](https://github.com/citta-lab/DSA/blob/main/arrays/152.maximum-product-subarray.js)

    - Brute Force: Time: O(n^2) with two loops
    - Kadanes: Time: O(n)
    - Have three variable. result points to first element so we return first element as default. curMin and curMax
    - i.e result = nums[0], curMin = 1, curMax = 1
    - Loop through each element and update the curMin, curMax, and result. finally return result.
    - curMax = Math.max(num, num*curMax, num*curMin)
    - curMin = Math.min(num, num*curMax, num*curMin)
    - result = Math.max(result, curMax)

## 39. [Find Minimum in Rotated Sorted Array](https://github.com/citta-lab/DSA/blob/main/arrays/153.find-minimum-in-rotated-sorted-array.js)

    - Time: O(logN) Space: O(1)
    - Hence this needs to be solved in O(logn). We will use binary search
    - Binary search is done on sorted array but we have sorted with pivot. So will need small
    alteration to nomal BS.
    - we will have left = 0; right = nums.length-1 and result = nums[0].
    - with in while check if the given array is already sorted then return left most value comapred
    to result (i.e nums[0])
    - if we didnt do early return then find mid, check if mid is smallest compare to result.
    - check if left part of mid is already sorted, then move left pointer to mid+1 else right
    pointers to mid-1

## 40. [Reverse Bits]()

       -

## 41. [Number of 1 Bits](https://github.com/citta-lab/DSA/blob/main/bits/191.number-of-1-bits.js)

    - Time: O(N) and Space:O(N)
    - we will need to do bit shifting and masking i.e mask = 1
    - we will need to calculate for 32 bit.
    -- i.e `for(let i=0; i<32; i++)`
    - if we add 1 to the given bits we will get 0 if bits has 1 or 0 if bits has 0.
    -- `if((mask & n) !== 0){ count ++ }`
    - if the result is 0, then we can say bits has 1 and we increase the count.
    - then we need to mask or shit i.e mask <<= 1;

## 42. [House Robber](https://github.com/citta-lab/DSA/blob/main/dp/198.house-robber.js)

    - Time: O(N) and Space:O(N)
    - can we solved with recursion & memoization which will have
    - can also be solved using DP with time:O(N) and Space:O(1)
    - in DP,
    -- we initialize rob1 and rob2 be ZERO. will be used as pre-steps for given nums.
    -- i.e // [rob1, rob2, n, n+1, n+2, ...]
    -- while traversing the nums array. we will need to calculate max gain between two options
    -- temp = Math.max(rob1+nums[n], rob2);
    -- move the pointers rob1 and rob2 i.e rob1 = rob2; rob2 = temp

## 43. [Number of Islands](https://github.com/citta-lab/DSA/blob/main/graphs/200.number-of-island-dfs.js)

    - Time: O(M*N) and Space: O(M*N)
    - DFS heper will be called with grid,row, col, visited.
    - we need to call on each sell so it will be two for loops to call DFS.
    - we can precheck before calling DFS and if it returns true we incrment count
    - DFS will check row/col our of bound check, visited check, water check and returns false for all
    - DFS on all 4 ways and finally return true

## 44. [Reverse Linked List](https://github.com/citta-lab/DSA/blob/main/linkedList/206.reverse-linkedList.js)

    - have dummy point to null
    - temp = head.next; head.next = dummy; dummy = head; head = temp;

## 45. [Course Schedule](https://github.com/citta-lab/DSA/blob/main/graphs/207.course-schedule-canFinish-dfs.js)

    - Will do DFS recursiuon on the adjList
    - Will initialize the adjList with courses by looping over numCourses.
    - will add [course, pre] = pair from preReq's and add course dependecies in adjList
    - will call DFS for all the courses from numCourses
    - dfs should have visited check, adjList[course].length === 0 check to return true,
    looping all pre from preReqs using DFS
    - we will only do early false return
    - end of all DFS we will need to remove course from visited set and update course in
    adjList to be empty. i.e `visited.delete(course); adjList[course] = [];`

## 46. [Implement Trie (Prefix Tree)](https://github.com/citta-lab/DSA/blob/main/design/Trie.js)

[Ans: Diagram Solution](https://github.com/citta-lab/DSA/blob/main/a-assets/trie.png)

    - define TrieNode with children (empty hashmap) and endOfWord boolean defaulted to false
    - define Trie with constructor this.root = new TrieNode();
    - define insert method which takes word. we check for each char in word for node.children
    if char doesnt exist in children then we create new TrieNode for that char. if exists then
    we move node to char Trie. i.e (node = node.children[char]);
    - define search method and do as abvove but return false if char doesnt match. if matched
    keep moving pointer. At the end return `node.endOfWord;`
    - define startsWith and follow the same as search but at the end we simply return "TRUE"
    and no need to check if we reached end of the word.

## 47. [Design Add and Search Words Data Structure)](https://github.com/citta-lab/DSA/blob/main/trie/211.design-add-and-search-words-data-structure.js)

    - Same Trie implementation as above except search will now need to handle basic search when word has all alphabets like 'abc' and also when wild card is used like '.ab'.
    - Define TrieNode, Implement Trie class with addWord function (same as insert trie method) 
    - Define Search method which will pass info to DFS and returns only when DFS returns true.
    - DFS will take word, node, startIndex and will return node.endOfWord at the end.
    - Inside DFS, will loop though char of word and break the problem into handline char with '.' and without 
    -- if char is '.' then we extract all values from node.children ( so we can find try matching on every child node ). then call DFS recursively with same word, i+1, child. i.e DFS(word, i+1, child)
    -- if char is not '.' then will do normal search workflow

## 50. [ Contains Duplicate)](https://github.com/citta-lab/DSA/blob/main/binary-search-tree/235.lowest-common-ancestor-of-a-binary-search-tree.js)
   - Best Appraoch: Use Set which will result in O(n) time and O(n) sapce
   - Second Best Approach: Sorting and then checking with TWO pointers. time:O(nlogn) and space:O(1)


## 52. [Kth Smallest Element in a BST](https://github.com/citta-lab/DSA/blob/9e7511b9ac8b1b2039d9b42ff9f93e519ec0653d/arrays/238.product-of-array-except-self.js)
    - Best Appraoch: 
    - Time:O(n) and Space:O(1) if we exclude ans array
    - calculate left product by starting prodArray[0] = 1.
    - prodArray[i] = prodArray[i-1] * nums[i-1] will fill the product of rest of the cell
    - Use rightProductSum = 1 as product holder of right
    - loop though the  prodArray from right to left by doing so we will calulate produt and
    rightProductSum
    -- i.e productArray[i] = rightProductArray * productArray[i1]
    -- update rightProdArray as rightProductSum = rightProductSum * nums[i];
    - Second Best Approach:

## 53. [ Lowest Common Ancestor of a Binary Search Tree](https://github.com/citta-lab/DSA/blob/main/binary-search-tree/235.lowest-common-ancestor-of-a-binary-search-tree.js)
    - LCA / getLCA / get common parent 
    - We will need to do recursion on left or right node as it is balanced tree
    - base conditions: if root is null we return root
    - we check if p.val and q.val is less than root.val then we do recursion on left
    -- return LCA(root.left, p , q)
    - we check if p.val and q.val is greater than root.val then we do recursion on right
    -- return LCA(root.right, p, q)
    - if neither then we simply return root as it is BST and it must be balanced already

## 54. [Lowest Common Ancestor of a Binary Tree](https://github.com/citta-lab/DSA/blob/main/binary-tree/236.lowest-common-ancestor-of-a-binary-tree.js)
    - LCA / getLCA / get common parent 
    - We will need to do recursion on left and right node 
    - base conditions: if root is null we return root
    - base conditions: if ONE of given node is equal to root then root must be the parent 
    -- if(root === p || root === q) return root
    - recursion: run LCA on left and right node of root.
    -- left = LCA(root.left, p, q); right = LCA(root.right, p, q);
    - if we get value from both left and right we return root (if(left && right) return root)
    - if one of then is true (i.e both p & q belongs to either left or right ) then we return that side.
    -- return left ? left : right

## 54. [Product of Array Except Self](https://github.com/citta-lab/DSA/blob/9e7511b9ac8b1b2039d9b42ff9f93e519ec0653d/arrays/238.product-of-array-except-self.js)
    - Best Appraoch: 
    - Time:O(n) and Space:O(1) if we exclude ans array
    - calculate left product by starting prodArray[0] = 1.
    - prodArray[i] = prodArray[i-1] * nums[i-1] will fill the product of rest of the cell
    - Use rightProductSum = 1 as product holder of right
    - loop though the  prodArray from right to left by doing so we will calulate produt and
    rightProductSum
    -- i.e productArray[i] = rightProductArray * productArray[i1]
    -- update rightProdArray as rightProductSum = rightProductSum * nums[i];
    - Second Best Approach:
    - Time:O(n) and Space:O(n)
    - calculate leftProductArray from left to right where leftProductArray[0] = 1;
    -- i.e leftProductArray[i] = leftProductArray[i-1] * nums[i-1];
    - calculate rightProductarray from right to left where rightProductArray[nums.length-1] = 1;
    -- i.e rightProductarray[i] = rightProductarray[i+1] * nums[i+1];
    - finally we will have one more array which does product of these two


## 55. [Product of Array Except Self](https://github.com/citta-lab/DSA/blob/9e7511b9ac8b1b2039d9b42ff9f93e519ec0653d/arrays/238.product-of-array-except-self.js)
    - Best Appraoch: 
    - Time:O(n) and Space:O(1) if we exclude ans array
    - calculate left product by starting prodArray[0] = 1.
    - prodArray[i] = prodArray[i-1] * nums[i-1] will fill the product of rest of the cell
    - Use rightProductSum = 1 as product holder of right
    - loop though the  prodArray from right to left by doing so we will calulate produt and
    rightProductSum
    -- i.e productArray[i] = rightProductArray * productArray[i1]
    -- update rightProdArray as rightProductSum = rightProductSum * nums[i];
    - Second Best Approach:
