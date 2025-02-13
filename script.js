let price = 1.87;
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


const inputCash = document.getElementById("cash");
const purchaseBtn = document.getElementById("purchase-btn");
const result = document.getElementById("change-due");


purchaseBtn.addEventListener("click", () => {

    let cash = Number(inputCash.value);

    if(cash < price) {
        alert("Customer does not have enough money to purchase the item");
        result.textContent = "Customer does not have enough money to purchase the item";
    }
    if(cash === price) { 
        result.textContent = "No change due - customer paid with exact cash";
    }
})


function returnChange(money) { 
    // have to go from largest downwards
    let change = `OPEN `

    if(money > 100) { 
        let mooney = cid[cid.length - 1]; //if the $ is over 100, we will return a one hundred dollar note
        change += mooney;
    } 
}