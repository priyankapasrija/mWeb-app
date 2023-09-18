const asideModalContainer = document.querySelector(".model-container");
const backDropContainer = document.getElementById("backdrop");
const HoursBtn = document.querySelector(".hours-btn");
const minutesBtn = document.querySelector(".minutes-btn");
const inputElement = document.getElementById("duration-input");
const submitBtn = document.querySelector(".submit-button");

function closeAsideModal() {
  asideModalContainer.style.display = "none";
  backDropContainer.style.display = "none";
}

function showAsideModal() {
  asideModalContainer.style.display = "block";
  backDropContainer.style.display = "block";
}

//
//

const Buttons = {
  Hours: "hours",
  Minutes: "minutes",
};

let selectedButton = undefined;

const hoursToggle = () => {
  inputElement.min = "1";
  inputElement.max = "24";
  if (selectedButton != Buttons.Hours) {
    HoursBtn.classList.add("clicked");
    HoursBtn.style.color = "white";
    minutesBtn.classList.remove("clicked");
    minutesBtn.style.color = "var(--bg-color)";
    selectedButton = Buttons.Hours;
  }
};

const minutesToggle = () => {
  inputElement.min = "30";
  inputElement.max = "59";
  if (selectedButton != Buttons.Minutes) {
    minutesBtn.classList.add("clicked");
    minutesBtn.style.color = "white";
    HoursBtn.classList.remove("clicked");
    HoursBtn.style.color = "var(--bg-color)";
    selectedButton = Buttons.Minutes;
  }
};

hoursToggle();

HoursBtn.addEventListener("click", hoursToggle);
minutesBtn.addEventListener("click", minutesToggle);

// enable or disable submit button

const form = document.querySelector("#harazd-list-form");
const submitButton = form.querySelector(".submit-button");

form.addEventListener("input", function () {
  const isFormFilled = form.checkValidity();
  submitButton.disabled = !isFormFilled;
});
