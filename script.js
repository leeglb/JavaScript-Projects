let price = 3.26;
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
  cashRegister.innerHTML += `<p>${cid[i][0]}: ${cid[i][1]}\n</p>`;
}

purchaseButton.addEventListener("click", () => {
  let cashValue = Number(inputCash.value);
  if(cashValue < price) {
    alert("Customer does not have enough money to purchase the item");
  }
  else if(cashValue === price) {
    changeDue.textContent = "No change due - customer paid with exact cash";
  }
  else { 
    changeDue.textContent = returnChange(cashValue);
  }
})

returnChange(32.7);

