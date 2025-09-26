/*
Name: Abyan Patnam
Date created: 9/20/2025
Date last edited: 9/26/2025
Version: 1
Description: Homework 1 JS
*/


// Dynamic date
const d = new Date();
const text = d.toLocaleDateString();
const todayEl = document.getElementById("today");
if (todayEl) todayEl.textContent = text;


// Range slider live value
const slider = document.getElementById("range");
const output = document.getElementById("range-slider");
if (slider && output) {
output.textContent = slider.value;
slider.oninput = function () {
output.textContent = this.value;
};
}


// Simple confirm-password check
const pw1 = document.getElementById("pword");
const pw2 = document.getElementById("pword2");
if (pw1 && pw2) {
function validateMatch() {
if (pw1.value !== pw2.value) {
pw2.setCustomValidity("Passwords do not match");
} else {
pw2.setCustomValidity("");
}
}
pw1.addEventListener("input", validateMatch);
pw2.addEventListener("input", validateMatch);
}
