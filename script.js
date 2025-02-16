let price = 14;
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

    const decimal = ".";
    let change = money - price; //how much change we owe
    let string = change.toString();
    let stringFirst = string[0];
    let stringSecond = string[1];
    let num = null;
    let newNum = null;
    let secondNum = null;
    let index = 0; // our index for first number
    let secondIndex = 0; //index for second number
    let decimalIndex = 0; //index for decimal
    let changeBack = ""; //dialog we return



    // whole section is to see if it is above 10 or equal to 10 ig
    if(string.length >= 2) {

        num = Number(stringFirst * 10); 

        while(num >= division[index][1]) { // while and if succcesfully provide our entry point  
            index++;
            
        }
        if(num <= division[index][1]) {
            index--;
        }
        if(num / division[index][1] != 0 && num >= division[index][1]) { //if 30 % 20 != 0 and the number is larger than the note
            let equation = Math.floor(num / division[index][1]);
            cid[index][1] -= equation * division[index][1];
            changeBack += `${cid[index][0]}, ${copy[index][1] - cid[index][1]}`;
            newNum = num - division[index][1] * equation;
            while(newNum % division[index][1] != 0) {
                index--;
            }
            if(newNum % division[index][1] === 0 && newNum === division[index][1]) {
                cid[index][1] -= newNum;
                changeBack += `\n${cid[index][0]}, ${copy[index][1] - cid[index][1]}`;
                
            }
        }
        if(Number(stringSecond) != 0) { //this is for our second value

            secondNum = Number(stringSecond);

            while(secondNum >= division[secondIndex][1]) {  
                secondIndex++;
                
            }
            if(secondNum <= division[secondIndex][1]) {
                secondIndex--;
            }
            
            if(secondNum / division[secondIndex][1] != 0 && secondNum >= division[secondIndex][1]) {
                let equation = Math.floor(num / division[secondIndex][1]);
                cid[secondIndex][1] -= equation * division[secondIndex][1];
                newNum = secondNum - division[secondIndex][1] * equation;
    
            }
            while(newNum % division[secondIndex][1] != 0) {
                secondIndex--;
            }
            if(newNum / division[secondIndex][1] != 0) {
                cid[secondIndex][1] -= newNum;
                changeBack += `\n${cid[secondIndex][0]}, ${copy[secondIndex][1] - cid[secondIndex][1]}`;
                
            }
        }

        if(string.includes(decimal)) {
            let decimalValues = string.slice(string.indexOf(decimal)); //gives our decimals
            let valueOne = Number(decimalValues[1]);
            let ValueTwo = Number(decimalValues[2]);
        
            let decimalNum = Number(valueOne / 10);
            let decimalNumTwo = Number(ValueTwo / 100);

            while(decimalNum >= division[decimalIndex][1]) {
                decimalIndex++;
            }
            if(decimalNum <= division[decimalIndex][1]) {
                decimalIndex--;
            }
        
            if(decimalNum / division[decimalIndex][1] != 0 && decimalNum >= division[decimalIndex][1]) {
                let equation = Math.floor(decimalNum / division[decimalIndex][1]);
                cid[decimalIndex][1] -= equation * division[decimalIndex][1];
                changeBack += `\n${cid[decimalIndex][0]}, ${copy[decimalIndex][1] - cid[decimalIndex][1]}`;
                newNum = decimalNum - division[decimalIndex][1] * equation;
        
                while(!(newNum / division[decimalIndex][1] >= 1)) {
                    decimalIndex--;
                    cid[decimalIndex][1] -= (newNum.toString()[2] / 10);
                    changeBack += `\n${cid[decimalIndex][0]}, ${(copy[decimalIndex][1] - cid[decimalIndex][1]).toFixed(2)}`;
                }
                 
            }

            if(decimalValues.toString().length > 2) { 
                while(decimalNumTwo >= division[decimalIndex][1]) {
                    decimalIndex++;
                }
                if(decimalNumTwo <= division[decimalIndex][1]) {
                    decimalIndex--;
                }
                if(decimalNumTwo / division[decimalIndex][1] != 0 && decimalNumTwo >= division[decimalIndex][1]) {
                    let equation = Math.floor(decimalNumTwo / division[decimalIndex][1]);
                    cid[decimalIndex][1] -= equation * division[decimalIndex][1];
                    changeBack += `\n${cid[decimalIndex][0]}, ${copy[decimalIndex][1] - cid[decimalIndex][1]}`;
                    newNum = decimalNumTwo - division[decimalIndex][1] * equation;
                    
                    while(newNum / division[decimalIndex][1] > 1) {
                        decimalIndex--;
                        cid[decimalIndex][1] -= (newNum.toString()[2] / 10);
                        changeBack += `\n${cid[decimalIndex][0]}, ${(copy[decimalIndex][1] - cid[decimalIndex][1]).toFixed(2)}`;
                    }
                }
                console.log(); //at point where we are at nickel having a stroke and returning many decimals. 
                console.log(changeBack);
            }
            
        }
    
    
     
        
    }

    // this will check for single digits. 
    if(string.length === 1) {

        secondNum = Number(stringFirst);

        while(change >= division[index][1]) {  
            index++;
            
        }
        if(change <= division[index][1]) {
            index--;
        }
        if(secondNum / division[index][1] != 0 && secondNum >= division[index][1]) {
            let equation = Math.floor(num / division[index][1]);
            cid[index][1] -= equation * division[index][1];
            newNum = secondNum - division[index][1] * equation;

            
        }
        while(newNum % division[index][1] != 0) {
            index--;
        }
        if(newNum / division[index][1] != 0) {
            cid[index][1] -= newNum;
            changeBack += `${cid[index][0]}, ${copy[index][1] - cid[index][1]}`;
            
        }
    
    }
}




returnChange(27.45);

