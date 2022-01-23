/** 
 * 
 * 71. Simplify Path 
 * 
 * Given a string path, which is an absolute path (starting with a slash '/') to a file 
 * or directory in a Unix-style file system, convert it to the simplified canonical path.
 * In a Unix-style file system, a period '.' refers to the current directory, a double 
 * period '..' refers to the directory up a level, and any multiple consecutive slashes 
 * (i.e. '//') are treated as a single slash '/'. For this problem, any other format of
 *  periods such as '...' are treated as file/directory names.
 * 
 * The canonical path should have the following format:
 * 
 * - The path starts with a single slash '/'.
 * - Any two directories are separated by a single slash '/'. 
 * - The path does not end with a trailing '/'.
 * - The path only contains the directories on the path 
 * from the root directory to the target file or directory 
 * (i.e., no period '.' or double period '..')
 * - Return the simplified canonical path. 
 * 
 * Input: path = "/home/" 
 * Output: "/home"
 * 
 * Input: path = "/../"
 * Output: "/"
 * 
 * leetcode-question:71
 * leetcode:https://leetcode.com/problems/simplify-path/
 * 
 * Hint: 
 * - Split path by '/' which will eliminated all our '//' and tail '/' cases
 * - Add it to stack unless we see '.' or '' we skip/continue
 * - Use stack so we can pop previously added directory whenever we see '..'
 * - join stack with '/' and append the joined stack with '/' so we get '/home'
 * */

/** time: O(N) ans space: O(N) */
var simplifyPath = function(path) {
    let stack = [];
    let paths = path.split('/');
    
    for(let path of paths){
        
        if(path === '.'){
            continue;
        }
        
        if(path === ''){
            continue;
        }
        
        /** 
         * if we add stack.length check then stack.push(path)
         *  should be in else otherwise when we have example like
         * '/../' we cant pop as stack is empty and endup adding 
         * .. to stack which is WRONG 
         * */
        if(path === '..'){
            stack.pop();
            continue;
        }
        
        stack.push(path);
    }
    
    return '/' + stack.join('/');
};

console.log(simplifyPath('/../'));
console.log(simplifyPath('/home/'));