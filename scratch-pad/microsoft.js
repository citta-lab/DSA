/**
 * 1. Toughest Technical Challenges you have faced in recent project?
 * 
 * Two list 
 * masterData = [
 * {USD, INR, 74},
 * {USD, GBP, 0.6},
 * {GBP, EUR, 0.8}
 * ]
 * 
 * data = [
 * {USD, 10, GBP},
 * {INR, 1000, USD},
 * {USD, 20, EUR}
 * ] 
 */

 masterData =
    {
        'USD-INR': 74,
        'USD-GBP': 0.6,
        'GBP-EUR': 0.8
    };

const buildMap = (arr) => {
    arr.map((data) => {
        let temp = `${data.from}-${data.to}`;
        let val = data.money;

        //console.log(temp)
        if(masterData[temp]){
            let conversion = val * masterData[temp];
            console.log(`${data.from} to ${data.to} for ${val} is : ${conversion}`)
        }
    })
}


data = [
    { from: 'USD', 
      money: 10,
      to: 'GBP' }, 
    { from: 'INR', 
    money: 1000,
    to: 'USD' }, 
    { from: 'USD', 
    money: 20,
    to: 'EUR' }, 
];

let master = [
  { from: 'USD', 
    to: 'INR',
    conversion: 74
   }, 
   { from: 'USD', 
    to: 'GBP',
    conversion: 0.6
   }, 
   { from: 'GBP', 
   to: 'EUR',
   conversion: 0.8
  }, 
]


const buildRefMap = (arr, map={}) => {
    arr.forEach((data) => {
        
    })
}

//buildMap(data);