// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes a number as an argument and decides if the number is evenly divisble by three or not.

// a) Create a test with expect statements for each of the variables provided.


var num1 = 15
// Expected output: "15 is divisible by three"
var num2 = 0
// Expected output: "0 is divisible by three"
var num3 = -7
// Expected output: "-7 is not divisible by three"

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("divisibleBy", () => {
  it("takes a number and determines if it is divisible by three", () => {
    // set expect to equal an inerpolated statement, which logs if the variable, passed to the
    // function, is divisible by 3
    expect(divisibleBy(num3)).toEqual("-7 is not divisible by three")
    expect(divisibleBy(num1)).toEqual("15 is divisible by three")
    expect(divisibleBy(num2)).toEqual("0 is divisible by three")
  })
})
// Run the test to make sure you receive red error message that function name is not defined
// Note: Jest test produced desired "red message"

// b) Create the function that makes the test pass.

// create function named divisibleBy
const divisibleBy = (num) => {
  // set conditional to test if argument is evenly divisible by three
  if (num % 3 === 0){
    // return desired statement for each case
return `${num} is divisible by three`
} else {
  return `${num} is not divisible by three`
}
}

// Note: function produces green "passed" message. Function refactored, as needed.




// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

var randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
var randomNouns2 = ["temperature", "database", "chopsticks", "mango", "deduction"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango", "Deduction"]

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("capitalized", () => {
    it("returns all of the strings in the array with the first letter capitalized", () => {
      // set expect statement to equal the entire array with each string's first letter capitalized
      expect(capitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
      expect(capitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango", "Deduction"])

    })
  })

  // // Run the test to make sure you receive red error message that function name is not defined
  // // Note: Jest test produced desired "red message"

// b) Create the function that makes the test pass.
// create function named capitalized
const capitalized = (array) => {
  // use .map() method to iterate over the entire array
  // use .toUpperCase() method to upper case every 0'th index of each string in the array
  // use .substring() method to return the rest of the string, after index 0
  return array.map(value => value[0].toUpperCase() + value.substring(1, value.length))
}
// Note: function produces green "passed" message. Function refactored, as needed.

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

var vowelTester1 = "learn"
// Expected output: 1
var vowelTester2 = "academy"
// Expected output: 0
var vowelTester3 = "challenges"
// Expected output: 2

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("firstVowel", () => {
    it("returns the first instance of a vowel within a string", () => {
      // set expect to equal the first index in which a vowel occurs
      expect(firstVowel(vowelTester1)).toEqual(1)
      expect(firstVowel(vowelTester2)).toEqual(0)
      expect(firstVowel(vowelTester3)).toEqual(2)

    })
  })

  // Run the test to make sure you receive red error message that function name is not defined
 // Note: Jest test produced desired "red message"

// b) Create the function that makes the test pass.
// create function named firstVowel
const firstVowel = (string) => {
  // use for loop to iterate over the string
  for (var i = 0; i < string.length; i++){
    // set conditional statement to check for vowels withing the string
    if (string[i] === "a" || string[i] === "e" || string[i] === "i" || string[i] === "o" || string[i] === "u"){
    // return the index of the string in which a vowel is located
    // this should return only the first instance that the condition evalueates to true
    // to return all instances i would need to push into an empty array
    return string.indexOf(string[i])
  }
}
}

// Note: function produces green "passed" message. Function refactored, as needed.
