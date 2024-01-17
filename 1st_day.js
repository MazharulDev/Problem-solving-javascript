// ================ problem 1 =======================

// You have to print the following lines in the same format as –

// “Recently I heard that you’ve achieved 95% marks in your exam.
// This is brilliant!
// I wish you’ll shine in your life!	Good luck with all the barriers(/\) in your life.”

let text = `Recently I heard that you’ve achieved 95% marks in your exam.
This is brilliant!
I wish you’ll shine in your life! Good luck with all the barriers(/\\) in your life.`;

// console.log(text);

// ================ problem 2 =======================

// You need to take two integer value inputs and display their sum, subtraction, product and quotient in the format shown below.

const sum = (a, b) => {
  return a + b;
};
const sumResult = sum(5, 2);

// console.log(sumResult);

const subtraction = (a, b) => {
  return a - b;
};
const subtractionResult = subtraction(5, 2);

// console.log(subtractionResult);

const multiplication = (a, b) => {
  return a * b;
};

const multiplicationResult = multiplication(5, 2);

// console.log(multiplicationResult);

const division = (a, b) => {
  return Number(a / b).toFixed(2);
};

const divisionResult = division(5, 2);

// console.log(divisionResult);

const all = (a, b) => {
  return {
    sum: sum(a, b),
    subtraction: subtraction(a, b),
    multiplication: multiplication(a, b),
    division: division(a, b),
  };
};

const AllResult = all(5, 2);
// console.log(result);

// ================ problem 3 =======================

// You have to take a non-negative (0 or greater) number and say whether the number is even or odd.

const checkEvenOrOdd = (number) => {
  if (number < 0) {
    return "Please enter a non-negative number.";
  } else if (number % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

const EvenOddResult = checkEvenOrOdd(10);
// console.log(EvenOddResult);

// ================ problem 4 =======================

// You need to take an integer value as input and tell if it is positive or negative or zero.

const checkNumber = (number) => {
  if (number > 0) {
    return "positive";
  } else if (number < 0) {
    return "negative";
  } else {
    return "zero";
  }
};

const checkNumberResult = checkNumber(0);

// console.log(checkNumberResult);

// ================ problem 5 =======================

// Suppose a friend of yours tells you that he would buy a Gucci bag if he had Rs 10,000 or more. Otherwise if he has 5000 or more then he will buy Levis Bag. Otherwise he will buy something from New Market. He also told you that if he can buy a Gucci Bag and if he has more than 20 thousand rupees then he will buy another Gucci Belt.

const shoppingDecision = (money) => {
  if (money > 20000) {
    return "Gucci Bag, Gucci Belt";
  } else if (money >= 10000) {
    return "Gucci Bag";
  } else if (money >= 5000) {
    return "Levis Bag";
  } else {
    return "something";
  }
};

const shoppingDecisionResult = shoppingDecision(25400);
// console.log(shoppingDecisionResult);
