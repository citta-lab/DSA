/* Folder Access:
Given child-parent folder relationships, the user has access to folders in the access set. 
If the user has access to a parent, then the user has access to all the children too.
Find whether the user has access to a particular folder.
/A
|____/B
   |___ /C <-- access
   |___ /D
|____/E <-- access
   |___ /F 
|___/G
folders = [
('A', None), 
('B', 'A'),
('C', 'B'),
('D', 'B'),
('E', 'A'), 
('F', 'E')
]
access = ['C', 'E']
has_access(String folder_name) -> boolean has_access("B") -> false
has_access("C") -> true
What if the child folder has children? Is this a transitive relationship?
Can a folder has more than one parent? If so, how is it represented? 
Would it be possible a circular child-parent relationship? (Not really unless you have sym links)
Tradeoff: The following is a top-down approach which looks down the tree and gives permissions
to all children folders.
You might not have transitive relationships. You also might want to consider a bottom-up approach
where search is O(h) (height of the folder tree), but space is O(A) (# folders you initially have access to)
"""
 */

class FolderAccess {
    constructor(folderToParent, access){
        this.parentToChildren = {};
        this.access = access;

        for(let [child, parent] in folderToParent){
            if(!this.parentToChildren[parent]) this.parentToChildren[parent] = [];
            this.parentToChildren[parent].push(child);
        }

        this.processFolders();
    }

    processFolders(){
        let currentAccess = 
    }
}