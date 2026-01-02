import { distances, emissionFactors } from "./data.js";

/**
 * Get distance between two cities
 * @param {string} origin 
 * @param {string} destination 
 * @returns {number}
 */
export function getDistance(origin, destination) {
  if (origin === destination) return 0;

  return distances[origin]?.[destination] || null;
}

/**
 * Calculate CO2 emissions
 * @param {number} distance - Distance in km
 * @param {string} transport - Transport type
 * @returns {number}
 */
export function calculateEmissions(distance, transport) {
  const factor = emissionFactors[transport];

  if (!factor || !distance) return 0;

  return distance * factor;
}

/**
 * Main calculation function
 * @param {string} origin 
 * @param {string} destination 
 * @param {string} transport 
 * @returns {object}
 */
export function calculateTrip(origin, destination, transport) {
  const distance = getDistance(origin, destination);
  const emissions = calculateEmissions(distance, transport);

  return {
    origin,
    destination,
    transport,
    distance,
    emissions: Number(emissions.toFixed(2))
  };
}
