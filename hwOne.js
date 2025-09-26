/*
  Name: Abyan Patnam
  Date created: 09/20/2025
  Date last edited: 09/26/2025
  Version: 1
  Description: Homework 1 JS (date + validation)
*/

// ---- Dynamic date ----
const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sept","Oct","Nov","Dec"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const d = new Date();
const dayNum = d.getDate();
const suf = n => (n%10==1&&n%100!=11)?"st":(n%10==2&&n%100!=12)?"nd":(n%10==3&&n%100!=13)?"rd":"th";
document.getElementById("today").textContent =
  `${days[d.getDay()]}, ${months[d.getMonth()]} ${dayNum}${suf(dayNum)}, ${d.getFullYear()}`;

// ---- Confirm password check ----
(function () {
  const p1 = document.getElementsByName("pword")[0];
  const p2 = document.getElementsByName("pword2")[0];
  if (!(p1 && p2)) return;
  function check() {
    p2.setCustomValidity(p1.value === p2.value ? "" : "Passwords do not match");
  }
  p1.addEventListener("input", check);
  p2.addEventListener("input", check);
})();
