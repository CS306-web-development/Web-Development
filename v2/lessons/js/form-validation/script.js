const submitBtnEl = document.querySelector(".submitBtn");
const formEl = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const showPassEl = document.querySelectorAll(".showPass");

formEl.addEventListener("submit", (e) => {
  e.preventDefault;
});
submitBtnEl.addEventListener("click", (e) => {
  e.preventDefault();
});

showPassEl.forEach((showPass) => {
  showPass.addEventListener("click", (e) => {
    const passInput =
      e.target.parentNode.parentNode.parentNode.nextElementSibling.children[0];
    if (passInput.getAttribute("type") === "password") {
      passInput.setAttribute("type", "text");
    } else {
      passInput.setAttribute("type", "password");
    }
  });
});

allInputs.forEach((inputEl) => {
  inputEl.addEventListener("input", (e) => {
    validateInput(document.activeElement);
  });
});

function validateInput(inputElement) {
  document
    .querySelector(`.validate-${inputElement.name}`)
    .classList.remove("hidden");
  switch (inputElement.name) {
    case "userName":
      if (
        inputElement.value.trim().charAt("0") === "_" ||
        inputElement.value.includes("test")
      ) {
        inputElement.style.border = "1px solid red";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "Invalid username";
      } else {
        inputElement.style.border = "none";
        document.querySelector(`.validate-${inputElement.name}`).textContent ="";
      }
      break;

    case "email":
      if (
        inputElement.value.length > 0 &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputElement.value)
      ) {
        inputElement.style.border = "1px solid red";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "Invalid email address";
      } else {
        inputElement.style.border = "none";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "";
      }
      break;
    case "phoneNo":
      if (
        inputElement.value.length > 0 &&
        !/^[+]200?1[0125][0-9]{8}$/.test(inputElement.value)
      ) {
        inputElement.style.border = "1px solid red";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "Invalid phone number";
      } else {
        inputElement.style.border = "none";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "";
      }

      break;
    case "password":
      if (
        inputElement.value.length > 0 &&
        !/^(?=.*\d)(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,16}$/.test(
          inputElement.value
        )
      ) {
        inputElement.style.border = "1px solid red";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "Weak password: Password must contain one uppercase letter, one number and one alphanumeric character";
      } else {
        inputElement.style.border = "none";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "";
      }
      break;
    case "passwordConfirm":
      if (inputElement.value.length > 0 && inputElement.value !== document.querySelector("#password").value) {
        inputElement.style.border = "1px solid red";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "Passwords does not match";
      } else {
        inputElement.style.border = "none";
        document.querySelector(`.validate-${inputElement.name}`).textContent =
          "";
      }
  }
}
