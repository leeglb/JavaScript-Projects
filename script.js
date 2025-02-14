let price = 2;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];


const copy = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
  ];


let division = [ 
['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.1],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
]


function returnChange(money) { 

    let change = money - price; //how much change we owe
    let integerDifference = 0; // difference between old cash and new cash left for ints
    let decimalDifference = 0; //difference between old cash and new cash left for decimals 
    let index = 0; // our index for original 
    let new_index = 0; // our new index for decimals
    let isDecimal = null; //check if it is a decimal:
    let changeBack = ""; //dialog we return
    let decimalValues = 0; //this is for our decimal section. 
    

    
    while(change >= division[index][1]) { // works 
        index++;
    }
    if(change - Math.floor(change) === 0) { 
        isDecimal = false;
    }
    else { 
        isDecimal = true;
    }
    if(!isDecimal && cid[index][1] >= change) { //if the change is not a decimal & we have enough change
        cid[index][1] -= change;
        integerDifference = copy[index][1] - cid[index][1];
        changeBack = cid[index][0] + ` ${integerDifference}`;
        
    }
    console.log(changeBack);
    console.log(change);

    }
    

returnChange(6);

