/*
  Homework 1 JS
*/

// Today's date (weekday + full time, like your mockup)
(function () {
  const el = document.getElementById("today");
  if (!el) return;
  const d = new Date();
  // Example: Thursday, Sep 26 2024 10:58:02 GMT-0500 (CDT)
  el.textContent = d.toString();
})();

// Confirm password validation
(function () {
  const pw1 = document.getElementById("pword");
  const pw2 = document.getElementById("pword2");
  if (!(pw1 && pw2)) return;

  function validateMatch() {
    if (pw1.value !== pw2.value) {
      pw2.setCustomValidity("Passwords do not match");
    } else {
      pw2.setCustomValidity("");
    }
  }
  pw1.addEventListener("input", validateMatch);
  pw2.addEventListener("input", validateMatch);
})();

// (Optional) Show numeric value if you want a number beside the slider
// const slider = document.getElementById("range");
// if (slider) slider.addEventListener("input", ()=> slider.title = slider.value);
