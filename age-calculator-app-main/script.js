const form = document.querySelector("form");
const years = document.querySelector(".years span");
const months = document.querySelector(".months span");
const days = document.querySelector(".days span");
const dayInput = document.querySelector("input#day");
const monthInput = document.querySelector("input#month");
const yearInput = document.querySelector("input#year");
const checkBtn = document.querySelector(".check-btn");

//  get current date
var today = new Date();
var currentDay = String(today.getDate()).padStart(2, "0");
var currentMonth = String(today.getMonth() + 1).padStart(2, "0");
var currentYear = today.getFullYear();

dayInput.addEventListener("keyup", (e) => {
  if (e.target.value.length > 0) {
    if (e.target.value < 1 || e.target.value > 31) {
      dayInput.parentElement.classList.add("invalid");
    } else {
      dayInput.parentElement.classList.remove("invalid");
    }
  }
});

monthInput.addEventListener("keyup", (e) => {
  if (e.target.value.length > 0) {
    if (e.target.value < 1 || e.target.value > 12) {
      monthInput.parentElement.classList.add("invalid");
    } else {
      monthInput.parentElement.classList.remove("invalid");
    }
  }
});

yearInput.addEventListener("keyup", (e) => {
  if (e.target.value.length > 0) {
    if (e.target.value > currentYear) {
      yearInput.parentElement.classList.add("invalid");
    } else {
      yearInput.parentElement.classList.remove("invalid");
    }
  }
});

// Function to calculate difference (source: Stack Overflow)
const dateDiff = (startingDate, endingDate) => {
  let startDate = new Date(new Date(startingDate).toISOString().substr(0, 10));
  if (!endingDate) {
    endingDate = new Date().toISOString().substr(0, 10); // need date in YYYY-MM-DD format
  }
  let endDate = new Date(endingDate);
  if (startDate > endDate) {
    const swap = startDate;
    startDate = endDate;
    endDate = swap;
  }
  const startYear = startDate.getFullYear();
  const february =
    (startYear % 4 === 0 && startYear % 100 !== 0) || startYear % 400 === 0
      ? 29
      : 28;
  const daysInMonth = [31, february, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let yearDiff = endDate.getFullYear() - startYear;
  let monthDiff = endDate.getMonth() - startDate.getMonth();
  if (monthDiff < 0) {
    yearDiff--;
    monthDiff += 12;
  }
  let dayDiff = endDate.getDate() - startDate.getDate();
  if (dayDiff < 0) {
    if (monthDiff > 0) {
      monthDiff--;
    } else {
      yearDiff--;
      monthDiff = 11;
    }
    dayDiff += daysInMonth[startDate.getMonth()];
  }

  return [yearDiff, monthDiff, dayDiff];
};
// End of Function

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let day = e.target[0].value;
  let month = e.target[1].value;
  let year = e.target[2].value;
  let fullDate = year + "-" + month + "-" + day;
  let currentFullDate = currentYear + "-" + currentMonth + "-" + currentDay;

  const [totalYears, totalMonths, totalDays] = dateDiff(
    fullDate,
    currentFullDate
  );

  years.innerText = totalYears;
  months.innerText = totalMonths;
  days.innerText = totalDays;
});
