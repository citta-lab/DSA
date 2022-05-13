

const formatPhoneNumber = (data) => {

    if(!data.length) return null;

    /** replace any non digit values */ 
    let number = data.replace(/[^\d]/g, '');

    console.log(number.length)

    if(number.length < 4 || number.length > 10 ) return null;

    let firstPart = number.slice(0, 3);
    let secondPart = number.slice(3, 6);
    let thirdPart = number.slice(6, 10); 

    return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

console.log(formatPhoneNumber('7036597810')); // (703) 659-7810
console.log(formatPhoneNumber('70365978111111')); // null
console.log(formatPhoneNumber('703')); // null
console.log(formatPhoneNumber('703*659r78d10a')); // (703) 659-7810