// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const randomGameForm = document.querySelector(".js-game"),
  randomTitle = randomGameForm.querySelector("h3"),
  rangeForm = randomGameForm.querySelector(".range"),
  userForm = document.querySelector(".js-input"),
  userNumberInput = userForm.querySelector(".number"),
  userSubmit = userForm.querySelector(".submit"),
  result = document.querySelector(".result"),
  span1 = result.querySelector(".span1"),
  span2 = result.querySelector(".span2");

function GenerateNumber(number) {
  return Math.floor(Math.random() * (number + 1));
}

function LoadRandomNumber() {
  const rangeNumber = parseInt(rangeForm.value, 10);
  const randomNumber = GenerateNumber(rangeNumber);
  randomTitle.innerText = `Generate a number between 0 and ${rangeNumber}`;
  userForm.addEventListener("click", function(event) {
    event.preventDefault();
    const userNumber = parseInt(userNumberInput.value, 10);
    if (isNaN(userNumber)) return false;
    console.log(userNumber);
    span1.innerText = "";
    span2.innerText = "";
    span1.innerText = `You chose: ${userNumber}, the machine chose ${randomNumber}`;
    span2.innerText = `You ${userNumber === randomNumber ? "won" : "lost"}!`;
  });
}

function init() {
  rangeForm.addEventListener("input", LoadRandomNumber);
  setInterval(LoadRandomNumber, 1000);
}

init();
