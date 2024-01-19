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
