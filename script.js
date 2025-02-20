let price = 12.4;
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

const inputCash = document.getElementById("cash");
const changeDue = document.getElementById("change-due"); // result
const purchaseButton = document.getElementById("purchase-btn");
const cashRegister = document.getElementById("cash-register");

for(let i = 0; i < cid.length; i++) {
  cashRegister.innerHTML += `<p>${cid[i]}\n</p>`;
}

purchaseButton.addEventListener("click", () => {
  let cashValue = Number(inputCash.value);
  if(cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  }
  else if(cashValue === price) {
    alert("No change due - customer paid with exact cash");
  }
  else { 
    changeDue.textContent = returnChange(cashValue);
  }
})

function returnChange(money) { 

  let changeInt = (money - price).toFixed(2);
  let changeStr = changeInt.toString();
  let decimal = ".";
  let decimalValues = changeStr.slice(changeStr.indexOf(decimal))
  let integerValues = Number(changeStr - decimalValues);
  let decimalIndex = 0;
  let index = 0;
  let changeBack = "";

 

  for(let i = 0; i < division.length; i++) { //check we are at for integers
    if(integerValues - division[i][1] >= 0) {
      index = i;  
      
    }
    
  } // 19 - 10 = 9 so now we are less than the 10 note.

  while(integerValues >= division[index][1]) { //while the note is bigger, we repeat.
    
    if(division[index][1] != 1) {
      let equation = Math.floor(integerValues / division[index][1]);
      cid[index][1] -= (integerValues - division[index][1]) * equation;
      integerValues = Math.abs(integerValues - division[index][1] * equation);
      changeBack += `Status: OPEN ${division[index][0]}: $${division[index][1] * equation} `;
      
    }
    
    for(let i = 0; i < division.length; i++) { //check we are at
      if(integerValues - division[i][1] >= 0) {
        index = i;  
      }
    }
    if(division[index][1] === 1) {
      changeBack += `${division[index][0]}: $${division[index][1] * integerValues} `;
      break;
    }
    
    
  }

  // check for decimals 

  for(let d = 0; d < division.length; d++) {
    if(decimalValues - division[d][1] >= 0) {
      decimalIndex = d;
    }
  }

  while(decimalValues >= division[decimalIndex][1]) { //while the note is bigger, we repeat.
    
    if(decimalValues - division[decimalIndex] != 0) {
      
      let equation = Math.floor(decimalValues / division[decimalIndex][1]);
      
      cid[decimalIndex][1] -= (decimalValues - division[decimalIndex][1]) * equation;
      decimalValues = Math.abs(decimalValues - division[decimalIndex][1] * equation).toFixed(2);
      changeBack += `${division[decimalIndex][0]}: $${division[decimalIndex][1] * equation} `;
      

      
    }
    
    for(let d = 0; d < division.length; d++) { //check we are at
      if(decimalValues - division[d][1] >= 0) {
        decimalIndex = d;  
        
      }
    }
    if(division[index][1] === 0.01) {
      
      changeBack += `${division[decimalIndex][0]}: $${division[decimalIndex][1] * (decimalValues * 10)} `;
      break;
    }
    
    
  }
    
  
  
  console.log("Original Price: ", price, "Change Required: ", changeInt);
  console.log(changeBack);
    
}




returnChange(32.7);

