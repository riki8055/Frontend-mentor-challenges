const cardHolderName = document.getElementById("cardholderName");
const card__cardHolderName = document.querySelector(".cardholder-name");
const cardNumber = document.getElementById("cardNumber");
const card__cardNumber = document.querySelector(".card-number");
const expDateMonth = document.getElementById("expDate__month");
const expDateYear = document.getElementById("expDate__year");
const card__expDateMonth = document.querySelector(".card-exp-date .month");
const card__expDateYear = document.querySelector(".card-exp-date .year");
const cvc = document.getElementById("cvc");
const card__cvc = document.querySelector(".card-cvc");
const form = document.querySelector("form");
const btnContinue = document.querySelector(".btn-continue");
let isRightFormat = true;

cardHolderName.addEventListener("keyup", (e) => {
  e.target.value.length === 0
    ? changeName("Jane Appleseed")
    : changeName(e.target.value);
});

cardNumber.addEventListener("keyup", (e) => {
  changeNumber(e.target.value);
});

cardNumber.addEventListener("blur", (e) => {
  const regex = /(\d)\s+(?=\d)/g;
  const subst = `$1`;

  let number = e.target.value.replace(regex, subst);

  if (isNaN(number)) {
    cardNumber.parentElement.classList.add("error");
    isRightFormat = false;
    document.querySelector(".error-msg.temp").innerText =
      "Wrong format, numbers only";
  } else {
    cardNumber.parentElement.classList.remove("error");
    isRightFormat = true;
  }
});

expDateMonth.addEventListener("keyup", (e) => {
  e.target.value.length === 0 ? changeMonth("00") : changeMonth(e.target.value);
});

expDateYear.addEventListener("keyup", (e) => {
  e.target.value.length === 0 ? changeYear("00") : changeYear(e.target.value);
});

cvc.addEventListener("keyup", (e) => {
  e.target.value.length === 0 ? changeCvc("000") : changeCvc(e.target.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cardHolderName.value === "") {
    cardHolderName.parentElement.classList.add("error");
  } else {
    cardHolderName.parentElement.classList.remove("error");
  }

  if (cardNumber.value === "") {
    cardNumber.parentElement.classList.add("error");
    document.querySelector(".error-msg.temp").innerText = "Can't be blank";
  } else {
    cardNumber.parentElement.classList.remove("error");
  }

  if (expDateMonth.value == "" || expDateYear.value == "") {
    expDateMonth.parentElement.parentElement.classList.add("error");
  } else {
    expDateMonth.parentElement.parentElement.classList.remove("error");
  }

  if (cvc.value == "") {
    cvc.parentElement.classList.add("error");
  } else {
    cvc.parentElement.classList.remove("error");
  }

  let emptyCount = 0;

  document.querySelectorAll("input").forEach((inp) => {
    if (inp.value === "") {
      emptyCount++;
    }
  });

  if (emptyCount === 0 && isRightFormat) {
    addCard();
    btnContinue.addEventListener("click", () => {
      window.location.reload();
    });
  }
});

const changeName = (name) => {
  card__cardHolderName.textContent = name;
};

const changeNumber = (number) => {
  if (number.length === 0) {
    card__cardNumber.textContent = "0000 0000 0000 0000";
  } else {
    card__cardNumber.textContent = number;
  }
};

const changeMonth = (month) => {
  card__expDateMonth.textContent = month;
};

const changeYear = (year) => {
  card__expDateYear.textContent = year;
};

const changeCvc = (cvc) => {
  card__cvc.textContent = cvc;
};

const addCard = () => {
  document.querySelector(".container").classList.add("add-card");
};
