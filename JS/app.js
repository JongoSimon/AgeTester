const age = document.getElementById("age");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const resultDiv = document.getElementById("result");

// function to check age and display result 
function checkAge(event) {
    event.preventDefault(); // Prevent form submission
    const ageValue = parseInt(age.value);
    resultDiv.classList.remove("error", "Adult", "Minor", "Senior", "hidden");
    if (isNaN(ageValue) || ageValue <= 0) {
        resultDiv.textContent = "Please enter a valid age.";
        resultDiv.classList.add("error");
        return;
    }
    if (ageValue >= 18 && ageValue < 65) {
        resultDiv.textContent = "You are an adult.";
        resultDiv.classList.add("Adult");
    } else if (ageValue < 18) {
        resultDiv.textContent = "You are a minor.";
        resultDiv.classList.add("Minor");
    } else if (ageValue >= 65) {
        resultDiv.textContent = "You are a senior.";
        resultDiv.classList.add("Senior");
    }
}

// function to reset input and result
function reset(event) {
    event.preventDefault(); // Prevent form submission
    age.value = "";
    resultDiv.textContent = "";
    resultDiv.classList.add("hidden");
}

// add event listeners to buttons
btn.addEventListener("click", checkAge);
resetBtn.addEventListener("click", reset);

// allow user to press enter key to submit form
age.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        checkAge(event);
    }
});