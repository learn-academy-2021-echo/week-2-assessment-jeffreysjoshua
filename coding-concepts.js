// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Echo 2021"
// console.log(cohort.split(""))

a) Your answer:[E,c,h,o, ,2,0,2,1]
b) Verify and explain: This is the correct answer. That's because the .split() method takes a string and turns it into an array.
Also, whatever is in between the qotation marks, in the parentheses of the ^, will determine how often to make a new index/value.
Meaning that if i use .split(" "), I would get ["Echo", "2021"] vs .split("") gives me each character as its own value.


// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

a) Your answer: Hello, LEARN Student!
b) Verify and explain: LOL it returns "undefined" because the function does not have a "return". To make it display the desired
message, I need to either console.log() the statement inside of the function, or (the correct answer), return the statement
inside of the function and then call the function itself afterwards.


// --------------------3) What will this log?

var multBy2 = [4, 5, 6, 7, 8].map(value => value * 2)
// console.log(multBy2)

a) Your answer: [8, 10, 12, 14, 16]
b) Verify and explain: This is the correct answer. That is because the .map() method always returns an array of the same length
with whatever operation I perform on the values. In this case, I'm just multiplying each value by two.


// --------------------4) What will this log?

var onlyOdds = [11, 12, 13, 14, 15].filter(value => value % 2 !== 0)
// console.log(onlyOdds)

a) Your answer: [11, 13, 15]
b) Verify and explain: This is the correct answer. That is because the .filter() method returns an array with the values that
meet the conditional that I give to it. In this case I want it to only return numbers that are not even.


// --------------------5) What will this log?

var myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

a) Your answer: JavaScript
b) Verify and explain: This is the correct answer. That is because I am telling the computer to log the O'th index, of the
value located at the key "languages", within the object "myCodingSkills", which is "JavaScript".


// --------------------STRETCH: What will this log?

class Learn {
  constructor(name){
    this.student = name,
    this.cohort = "Delta",
    this.year = 2021
  }
}
var learnStudent = new Learn("George")
// console.log(learnStudent)

a) Your answer: {student: George, cohort: Delta, year: 2021}
b) Verify and explain: This is basically the correct answer. However, the name of the class "Learn" is also returned in front
of the object. I am still not totally sure why it does that, but I will look it up if I have time at the end of the assessment.
