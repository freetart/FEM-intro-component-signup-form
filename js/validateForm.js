"use strict";

const validateForm = () => {
  const form = document.querySelector(".signup-form__inputs");
  const firstNameInput = document.querySelector("#firstName");
  const lastNameInput = document.querySelector("#lastName");
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  // check input
  const checkInputs = () => {
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();

    if (firstNameValue === "") {
      setErrorMsg(firstNameInput, "First Name cannot be empty");
    }

    if (lastNameValue === "") {
      setErrorMsg(lastNameInput, "Last Name cannot be empty");
    }

    if (emailValue === "") {
      setErrorMsg(emailInput, "Email cannot be blank");
    } else if (!isEmail(emailValue)) {
      setErrorMsg(emailInput, "Email is not valid");
    }

    if (passwordValue === "") {
      setErrorMsg(passwordInput, "Password cannot be empty");
    } else if (!isPassword(passwordValue)) {
      setErrorMsg(
        passwordInput,
        "Password needs to be atleast 8 characters long with two number values"
      );
    }
  };

  // error message
  const setErrorMsg = (input, message) => {
    const inputGroup = input.parentElement;
    const errorMessage = inputGroup.querySelector(".input-group__message");
    errorMessage.innerText = message;
    inputGroup.className = "input-group error";
  };

  // check if valid email
  const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
  };

  // check to see if password is at least 8 chars long with 2 number values
  const isPassword = (password) => {
    return /^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$/.test(password);
  };

  // submit form
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
  });
};

export default validateForm;
