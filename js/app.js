import { populateCities, handleFormSubmit } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  populateCities();

  const form = document.getElementById("carbon-form");
  form.addEventListener("submit", handleFormSubmit);
});
