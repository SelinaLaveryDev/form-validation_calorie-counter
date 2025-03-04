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

function isInvalidInput(str) {
  const regex = /\d+e\d+/i;
  return str.match(regex); // the match method will return null if the pattern is not found in the string
}
console.log(isInvalidInput("1e3")); // true because it's invalid
console.log(isInvalidInput("1000")); // false because it's valid there is no e in the string. returns null in console

console.log(entryDropdown.value); // breakfast

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container` // breakfast .input-container
  );
  const entryNumber = targetInputContainer.querySelectorAll(
    'input[(type = "text")]'
  ).length; // breakfast input[type="text"]
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  `; // breakfast-0-name
}
