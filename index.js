const inputBox = document.querySelector("input");
const checkBtn = document.querySelector("button");
const result = document.querySelector("div");


checkBtn.addEventListener("change", function() {
    result.innerText = inputBox.textContent();
})