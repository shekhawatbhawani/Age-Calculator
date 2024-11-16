const input = document.querySelector("input");
const button = document.querySelector("button");
const ans = document.querySelector(".p2");

function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}
let today = new Date();
let currentDate = today.getDate();
let currentMonth = today.getMonth() + 1;
let currentYear = today.getFullYear();

let current = `${currentYear}-${currentMonth}-${currentDate}`;
let totalDayInMonth = getDaysInMonth(currentMonth, currentYear);

button.addEventListener("click", () => {
    console.log(input.value);

    let birthYear = input.value.split("-")[0];
    var year = 2024 - birthYear;

    let birthMonth = input.value.split("-")[1];
    var month = 0;
    if (birthMonth > currentMonth) {
        month = birthMonth + 12;
    } else {
        month = currentMonth - birthMonth;
    }

    let birthDate = input.value.split("-")[2];
    var day = 0;
    if (birthDate > currentDate) {
        day = currentDate - birthDate + 30;
    } else {
        day = currentDate - birthDate;
    }

    let totalAge = `The Total Year ${year} and Total Month ${month} and Total Day ${day}`;

    ans.innerText = `Your age is ${totalAge} `;
});
