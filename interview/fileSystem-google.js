class Entity {
    entityId;
    type;
    name;
    size;
    children = [];
}

const Type = {
    file,
    directory
}

let fileSystem  = {
    id : Entity
}

/**
 * root(id=1)
 *     dir(id=2)
 *          file(id=3): 100
 *          file(id=4): 100
 *     file(id=5): 100
 */

const entitySize = (id) => {
    let size = 0;
    let entity = fileSystem[id];
    
    if(!entity) return new Error('Not found');

    if(entity.type === 'file') return entity.size; 

    if(entity.children.length > 0){
        for(let child of children){
            size += entitySize(child);
        }
    }

    return size;
}

const entity = (id) => {
    let hash = {};
    return entityWithMap(id, hash);
};

