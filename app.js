const { capitalize, reverse, contains } = require("./stringUtils.js");

// Test capitalize
console.log(capitalize("hello")); // "Hello"
console.log(capitalize(""));      // ""

// Test reverse
console.log(reverse("world"));    // "dlrow"
console.log(reverse("a"));        // "a"

// Test contains
console.log(contains("JavaScript", "Script")); // true
console.log(contains("JavaScript", "Python")); // false
