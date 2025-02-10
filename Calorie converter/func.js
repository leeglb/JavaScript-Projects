const calorieInput = document.getElementById("input");
const selectOptions = document.getElementById("selected");
const convertBtn = document.getElementById("convert-btn");
const results = document.getElementById("results-div");


convertBtn.addEventListener("click", () => { 
    let inputValue = calorieInput.value; 

    results.textContent = caloriesToKJ(inputValue);

})

function caloriesToKJ(calories) { 

    let kilojoule = Number(calories) * 4.184; 

    return `${kilojoule}kj`; 
}

function kjToCalories(kilojoule) { 

    let calorie = Number(kilojoule) / 4.184; 

    return `${calorie} calories`;
}