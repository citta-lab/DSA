/**
 * 71. Simplify Path
 * 
 * Given a string path, which is an absolute path (starting with a slash '/') to a 
 * file or directory in a Unix-style file system, convert it to the simplified canonical path.
 * In a Unix-style file system, a period '.' refers to the current directory, 
 * a double period '..' refers to the directory up a level, and any multiple consecutive slashes 
 * (i.e. '//') are treated as a single slash '/'. 
 * 
 * For this problem, any other format of periods such as '...' are treated as file/directory names.
 * 
 * Return the simplified canonical path.
 * 
 * Input: path = "/home//foo/"
 * Output: "/home/foo"
 * 
 * Input: path = "/../"
 * Output: "/"
 * 
 * 
 * leetcode-question:71
 * leetcode:https://leetcode.com/problems/simplify-path/
 * video:https://www.youtube.com/watch?v=qYlHrAKJfyA ( refer leetcode solution )
 * 
 * Hint:
 * - Time: O(N) and Space:O(N)
 * - we need stack to handle '..' i.e back directory operation.
 * - we can treat empty space and '.' as same.
 * - we can split by '/' and process them 
 * 
 */

 /** Time: O(N) and Space:O(N) */
 var simplifyPath = function(path) {
    
    let stack = [];
    let pathSplit = path.split('/');
    
    for(let directory of pathSplit){
        
        /** step 1: if it is EMPTY or '.' we do nothing */
        if(directory === '.' || directory.trim().length === 0){
            continue;
        } 
        
        /** step 2: if we find '..' then we need to go back a directory */
        else if (directory === '..'){
            if(stack.length){
                stack.pop();
            }
        }
        
        /** step 3: it should be clean file/directory */
        else {
            stack.push(directory);
        }
    }
    
    /** process the stack */
    let result = "";
    for(let dir of stack){
        result += "/";
        result += dir;
    }
    
    return result.length > 0 ? result : '/'  
};

