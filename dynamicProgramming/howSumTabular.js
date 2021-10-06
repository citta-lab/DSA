const howSumTabular = (target, array) => {
    const store = new Array(target+1).fill(null);

    // initialize first element with empty array ( i.e possible way of finding 0 from an array is always [ ])
    store[0] = [];

    for(let i=0; i<= target; i++){
        const currentValue = store[i];
        if(currentValue !== null){
            for(let num of array){
                store[i+num] = [...currentValue, num];
            }
        }
    }

    console.log(store)
    return store[target]
}


console.log(howSumTabular(7, [4,6,3,5]))