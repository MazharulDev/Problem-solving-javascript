// ================ problem 11 =======================

// Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sumEvenNumbers = (numbers) => {
  return numbers.reduce((accumulator, currentValue) => {
    if (currentValue % 2 === 0) {
      accumulator += currentValue;
    }
    return accumulator;
  }, 0);
};

const evenSum = sumEvenNumbers(numbers);
// console.log(evenSum);
// ================ problem 12 =======================
// Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.

const isLeapYear = (year) => {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(isLeapYear(2024));

// ================ problem 13 =======================
// Task: Count Vowels:
// Write a function that counts the number of vowels in a given string. Example: Happy New Year

const countVowels = (text) => {
  const vowels = "aeiouAEIOU";
  let vowelCount = 0;

  for (const char of text) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  return vowelCount;
};

const vowelCount = countVowels("Happy New Year");
// console.log(vowelCount);

// ================ problem 14 =======================

// Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.

const filterDuplicates = (inputArray) => {
  let uniqueNumbers = [];

  for (let num of inputArray) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }

  return uniqueNumbers;
};

let inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 9, 9, 3, 10];

let resultArray = filterDuplicates(inputArray);

// console.log("Original array:", inputArray);
// console.log("Array with duplicates filtered out:", resultArray);

// ================ problem 15 =======================
// Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.

const findMax = (arr) => {
  return Math.max(...arr);
};

const maxNumber = findMax([5, 10, 3, 7, 2, 8]);
console.log("Maximum value:", maxNumber);
