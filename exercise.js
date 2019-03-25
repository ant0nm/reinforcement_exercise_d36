// our data
const words = ["Totam", "ut", "odit","quis", "Maiores", "unde", "EX", "EST", "corporis"];

// our arrow function validators
const wordIsLower = word => word === word.toLowerCase()
const wordIsLong = word => word.length > 4

const wordValidator = word => {
  if (wordIsLower(word) && wordIsLong(word)) {
    console.log("long and lowercase");
  } else if (wordIsLower(word)) {
    console.log("lowercase");
  } else if (wordIsLong(word)) {
    console.log("long");
  } else {
    console.log(word);
  }
}

words.forEach(wordValidator);
