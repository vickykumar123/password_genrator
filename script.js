let lengthSlider = document.querySelector(".pass_length input");
let pass_Display = document.querySelector(".input_box input");
let copyIcon = document.querySelector(".input_box span i");
let passIndicator = document.getElementById("medium");
let getPassword = document.querySelector(".generate-btn");
let options = document.querySelectorAll(".options .option input");
let length = document.getElementById("length");

let character = {
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  number: "0123456789",
  symbol: "^!$@#%&*()_-+{}<>[]<>/?",
};
let getPasswords = () => {
  let staticPassword = "";
  let randomPassword = "";
  let pass_length = lengthSlider.value;
  options.forEach((option) => {
    if (option.checked) {
      staticPassword += character[option.id];
    }
  });
  for (let i = 0; i < pass_length; i++) {
    randomPassword +=
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }
  pass_Display.value = randomPassword;
  //   console.log(randomPassword);
};

let updateSlider = () => {
  length.innerHTML = lengthSlider.value;
  getPasswords();
  if (lengthSlider.value <= 8) {
    passIndicator.id = "weak";
  } else if (lengthSlider.value >= 18) {
    passIndicator.id = "strong";
  } else {
    passIndicator.id = "medium";
  }
};
lengthSlider.addEventListener("input", updateSlider);
getPassword.addEventListener("click", getPasswords);
copyIcon.addEventListener("click", () => {
  navigator.clipboard.writeText(pass_Display.value);
  copyIcon.classList.remove("fa-regular");
  copyIcon.classList.remove("fa-clipboard");
  copyIcon.classList.add("fa-solid");
  copyIcon.classList.add("fa-check");
  setTimeout(() => {
    copyIcon.classList.remove("fa-solid");
    copyIcon.classList.remove("fa-check");
    copyIcon.classList.add("fa-regular");
    copyIcon.classList.add("fa-clipboard");
  }, 1000);
});
