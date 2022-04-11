## Sort in Map()
If our map is build using `new Map()` which holds key and array of values. If we are interested in
sorting the values based on key then we need to follow as below
-- extract the keys
-- sort the keys
-- map on keys to get values
```js
/** example map */
Map(4) { 0 => [ 3, 15 ], -1 => [ 9 ], 1 => [ 20 ], 2 => [ 7 ] }

 let sort = [...map.keys()].sort((a,b) => a-b).map((id) => {
        return map.get(id)
    });

console.log(sort); // [[9],[3,15],[20],[7]]
```

