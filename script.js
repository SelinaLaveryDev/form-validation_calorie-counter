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

function addEntry() {
  const targetInputContainer = document.querySelector(
    `#${entryDropdown.value} .input-container`
  );
  const entryNumber =
    targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
  const HTMLString = `
  <label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
  <input type="text" placeholder="Name" id="${entryDropdown.value}-${entryNumber}-name" />
  <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
  <input
    type="number"
    min="0"
    id="${entryDropdown.value}-${entryNumber}-calories"
    placeholder="Calories"
  />
  `;
  targetInputContainer.insertAdjacentHTML();
}

addEntryButton.addEventListener("click", addEntry);
