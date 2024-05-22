/* global Chart */
const monBody = document.querySelector("body");
const monBtnDarkMode = document.querySelector(".dark-mode");
console.log(monBtnDarkMode);

monBtnDarkMode.addEventListener("click", () => {
    monBody.classList.toggle("darkMode");
    if (monBody.classList.contains("darkMode")) {
        monBtnDarkMode.textContent = "☀ Mode clair";
        monBtnDarkMode.classList.remove("btn-dark");
        monBtnDarkMode.classList.add("btn-light");
    } else {
        monBtnDarkMode.textContent = "☾ Mode sombre";
        monBtnDarkMode.classList.remove("btn-light");
        monBtnDarkMode.classList.add("btn-dark");
    }
});
