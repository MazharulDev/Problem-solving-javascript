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
