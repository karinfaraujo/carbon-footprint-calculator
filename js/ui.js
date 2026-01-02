import { cities } from "./data.js";
import { calculateTrip } from "./calculator.js";

/**
 * Populate city select options
 */
export function populateCities() {
  const originSelect = document.getElementById("origin");
  const destinationSelect = document.getElementById("destination");

  cities.forEach(city => {
    const option1 = document.createElement("option");
    option1.value = city;
    option1.textContent = city;

    const option2 = option1.cloneNode(true);

    originSelect.appendChild(option1);
    destinationSelect.appendChild(option2);
  });
}

/**
 * Display calculation result on screen
 * @param {object} result 
 */
export function displayResult(result) {
  const resultContainer = document.getElementById("result");
  const resultText = document.getElementById("result-text");

  resultText.innerHTML = `
    <strong>Route:</strong> ${result.origin} → ${result.destination}<br />
    <strong>Transport:</strong> ${result.transport}<br />
    <strong>Distance:</strong> ${result.distance} km<br />
    <strong>Estimated CO₂ Emissions:</strong> ${result.emissions} kg
  `;

  resultContainer.classList.remove("hidden");
}

/**
 * Handle form submission
 */
export function handleFormSubmit(event) {
  event.preventDefault();

  const origin = document.getElementById("origin").value;
  const destination = document.getElementById("destination").value;
  const transport = document.getElementById("transport").value;

  if (!origin || !destination || !transport) {
    alert("Please fill in all fields.");
    return;
  }

  if (origin === destination) {
    alert("Origin and destination must be different.");
    return;
  }

  const result = calculateTrip(origin, destination, transport);
  displayResult(result);
}
