const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");

console.log(budgetNumberInput);

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
  targetInputContainer.insertAdjacentHTML("beforeend", HTMLString); // Insert the HTML string before the end of the target input container
}

function getCaloriesFromInputs(list) {
  let calories = 0;
  for (const item of list) {
    const currVal = cleanInputString(item.value);
    const invalidInputMatch = isInvalidInput(currVal);
    if (invalidInputMatch) {
      alert(`Invalid Input: ${invalidInputMatch[0]}`);
      isError = true;
      return null;
    }
    calories += Number(currVal);
  }
  return calories;
}

function calculateCalories(e) {
  e.preventDefault();
  isError = false;
  let breakfastNumberInputs = document.querySelectorAll(
    "#breakfast input[type='number']"
  );
  const lunchNumberInputs = document.querySelectorAll(
    "#lunch input[type='number']"
  );
  const dinnerNumberInputs = document.querySelectorAll(
    "#dinner input[type='number']"
  );
  const snacksNumberInputs = document.querySelectorAll(
    "#snacks input[type='number']"
  );
  const exerciseNumberInputs = document.querySelectorAll(
    "#exercise input[type='number']"
  );
  let breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
  const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
  const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
  const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
  const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
}

addEntryButton.addEventListener("click", addEntry);
