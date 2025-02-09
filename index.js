const input = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const results = document.getElementById("results-div");
const regex = /[\s$0-9()]/g;


/* Appropriate ones 
1 555-555-5555
1 (555) 555-5555
1(555)555-5555
1 555 555 5555
5555555555
555-555-5555
(555)555-5555
*/

//length is between 10-16


checkBtn.addEventListener("click", () => { 

    let ourValue = input.value; 

    if(checkNum(ourValue)) {
        results.textContent = `Valid US number: ${ourValue}`;
    }
    else { 
        results.textContent = `Invalid US number: ${ourValue}`;
    }
})

function checkNum(num) { 

    let inputValue = num.replace(regex, "");

    if(inputValue.length >= 10 && inputValue.length <= 16) {
        // if its between this length, we can continue
        // perhaps we check if the country code is 1? requires length of 10 without it.
        if((inputValue[0] === "1" && inputValue.length === 11) || inputValue.length === 10){
            return true;
        }
        else {
            return false;
        }

    }
    else { 
        return false;
    }
}