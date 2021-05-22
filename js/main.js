import preloader from "./preloader.js";
import validateForm from "./validateForm.js";

const init = () => {
  preloader();
  validateForm();
};

window.addEventListener("DOMContentLoaded", init);
