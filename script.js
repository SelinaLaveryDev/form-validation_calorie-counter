const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

let isError = false;

function cleanInputString(str) {
  const regex = /[+-\s]/g; // The g flag stands for global will replace all occurrences of the pattern in the string
  return str.replace(regex, ""); // Replace all occurrences of the pattern with an empty string, basically removing them
}
