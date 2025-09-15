// Capitalize the first letter of a string
function capitalize(str) {
  if (!str || typeof str !== "string") return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Reverse the characters in a string
function reverse(str) {
  if (!str || typeof str !== "string") return "";
  return str.split("").reverse().join("");
}

// Check if substring exists within a string
function contains(str, substr) {
  if (!str || !substr) return false;
  return str.includes(substr);
}

// Exporting functions
module.exports = {
  capitalize,
  reverse,
  contains
};

