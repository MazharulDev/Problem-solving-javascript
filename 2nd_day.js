// ================ problem 5 =======================

// Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

const people = [
  { name: "Mazharul", age: 23, gender: "male" },
  { name: "Marufa", age: 17, gender: "female" },
  { name: "Faisal", age: 23, gender: "male" },
  { name: "Sara", age: 16, gender: "female" },
  { name: "Tabassum", age: 19, gender: "female" },
];

const filterAndMapFemales = (peopleArray) => {
  const females = peopleArray.filter((person) => person.gender === "female");
  const femaleNames = females.map((person) => person.name);
  return femaleNames;
};

const femaleFilterResult = filterAndMapFemales(people);

// console.log(femaleFilterResult);

// ================ problem 6 =======================

// Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
  { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
  { title: "1984", author: "George Orwell", year: 1949 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
  { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
];

const extractBookTitles = (bookArray) => {
  return bookArray.map((book) => book.title);
};

const bookTitles = extractBookTitles(books);

// console.log(bookTitles);

// ================ problem 7 =======================

// Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

// Function to square a number
const square = (x) => {
  return x ** 2;
};

// Function to double a number
const double = (x) => {
  return 2 * x;
};

// Function to add 5 to a number
const addFive = (x) => {
  return x + 5;
};

// Composed function
const squareDoubleAddFive = (x) => {
  const result = addFive(double(square(x)));
  return result;
};

const result = squareDoubleAddFive(3);
// console.log(result);

// ================ problem 8 =======================

// Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

const cars = [
  { make: "Toyota", model: "Camry", year: 2018 },
  { make: "Honda", model: "Civic", year: 2020 },
  { make: "Ford", model: "Mustang", year: 2019 },
  { make: "Chevrolet", model: "Malibu", year: 2017 },
];

const sortByYearAscending = (carsArray) => {
  return carsArray.sort((a, b) => {
    return a.year - b.year;
  });
};

const sortedCars = sortByYearAscending(cars);

// console.log(sortedCars);

// ================ problem 9 =======================

// Task: Find and Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

// Array of person objects
let peoples = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

// Function to search and modify age by name
const updateAgeByName = (peopleArray, targetName, newAge) => {
  for (let i = 0; i < peopleArray.length; i++) {
    if (peopleArray[i].name === targetName) {
      peopleArray[i].age = newAge;
      return true;
    }
  }
  return false;
};

const targetName = "Bob";
const newAge = 35;

// Check if the person is found and update age
if (updateAgeByName(peoples, targetName, newAge)) {
  console.log("Age updated for", targetName);
} else {
  console.log(targetName, "not found in the array");
}

// Print the updated array
console.log(peoples);
