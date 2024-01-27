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
console.log(evenSum);
// ================ problem 12 =======================
// ================ problem 13 =======================
// ================ problem 14 =======================
// ================ problem 15 =======================
