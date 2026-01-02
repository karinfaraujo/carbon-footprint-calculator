// List of available cities
export const cities = [
  "New York",
  "Los Angeles",
  "Chicago",
  "San Francisco",
  "Miami"
];

// Distance matrix (in kilometers)
export const distances = {
  "New York": {
    "Los Angeles": 3935,
    "Chicago": 1145,
    "San Francisco": 4125,
    "Miami": 2145
  },
  "Los Angeles": {
    "New York": 3935,
    "Chicago": 2805,
    "San Francisco": 560,
    "Miami": 3750
  },
  "Chicago": {
    "New York": 1145,
    "Los Angeles": 2805,
    "San Francisco": 2975,
    "Miami": 1915
  },
  "San Francisco": {
    "New York": 4125,
    "Los Angeles": 560,
    "Chicago": 2975,
    "Miami": 4160
  },
  "Miami": {
    "New York": 2145,
    "Los Angeles": 3750,
    "Chicago": 1915,
    "San Francisco": 4160
  }
};

// CO₂ emission factors (kg CO₂ per km per passenger)
export const emissionFactors = {
  car: 0.192,
  bus: 0.105,
  train: 0.041,
  plane: 0.255
};
