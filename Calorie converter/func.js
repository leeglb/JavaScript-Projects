const calorieInput = document.getElementById("input");
const selectOptions = document.getElementById("selected");
const convertBtn = document.getElementById("convert-btn");
const results = document.getElementById("results-div");
const resetBtn = document.getElementById("reset-btn");

let selected = 0;
let calorie = 0;



var form = document.getElementById("calorie-form");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //prevents auto submit

    selected = document.getElementById("selected").value;
    calorie = document.getElementById("input").value;
    reset = document.getElementById("reset-btn").value;

    if(selected == 1 && calorie.length > 0) {
        results.textContent = kjToCalories(calorie);
    }
    else if(selected == 2 && calorie.length > 0) {
        results.textContent = caloriesToKJ(calorie); 
    }
    else if(calorie.length === 0) {
        alert("You need to enter a number!");
    }
    else if(selected.value === 0) { 
        alert("You need to pick an option!");
    }
})

resetBtn.addEventListener("click", () => {
    results.textContent = "";
    
})

function caloriesToKJ(calories) { 

    let kilojoule = Number(calories) * 4.184; 

    return `${kilojoule.toFixed(2)} kj`; 
}

function kjToCalories(kilojoule) { 

    let calorie = Number(kilojoule) / 4.184; 

    return `${calorie.toFixed(2)} calories`;
}

