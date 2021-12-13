# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

  Your answer: A parameter is basically just an expectation that some data will be passed to a function. Functions can hold (I think) as many parameters as you you want to give them. They are placed within the (), in the beginning of the function definition, before the code block, and are separated by commas.

  An argument is the actual data you give to the function to work with/ manipulate. You must have an expectation (aka. parameter) in the function, that data will be passed to it, in order to give the function an argument. The function takes the argument(s) that you give it, and applies the code block to those arguments. An argument can be any data type recognizable by the language you are using.

  Researched answer: I learned that there are more than one type of parameter. I have most commonly been exposed to input parameters, but a function can also list an output parameter as well. Parameters can be thought of as "place holders".



2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

  Your answer: The three parameters that .map() takes are value, index, and array. The only one that is mandatory is the "value" parameter. Both index and array are optional.

  Researched answer: Both the value and the index parameters are iterated over from the start to the end of the array. However, the array parameter is the specific array in which the .map() method is being called upon.



3. What is object destructuring?

  Your answer: Object destructuring is the practice of assigning specific values in the object, to their own individual variables.

  Researched answer: When destructuring, the name of the variable that is assigned to the value, needs to match the name of the property in the object. The destructuring process can save a developer a lot of time when needing to access values in complex objects.



4. What is the difference between a function and a method?

  Your answer: A function is a set of instructions, that the developer creates, to have a specific operation performed on a set of parameters. The developer can create many different types of functions, to perform many different types of tasks, and can customize the amount of parameters.

  A method is a type of function which has already been preassigned to a set of instructions, by other developers in the past. Methods are typically "commonly used" tasks that are expected to be needed many times, so they were created to reduce code writing for tasks that most developers will need to have done regularly. When a method is called, the computer already understands what it does without the developer needing to write a code block.

  Researched answer: Methods are considered to be properties of objects; meaning methods are performed specifically on objects (including arrays which are considered objects). This is compared to functions which can work on any datatype that the developer decides. Also, the names of functions are individually decided by the given developer, whereas methods have fixed names that were already predefined.



5. What is the difference between a class and an object?

  Your answer: An object is more-or-less "hard coded". It is only really meant to carry the values and keys that were originally assigned to it. You can reassign, add, and remove values in an object, but objects are not necessarily designed to be changed.

  A class is a "blue print" for an object. Meaning that a class is an object which is meant to be used multiple times, but with slight variations. You can keep some values in a class as "fixed values", and you can set some up to be flexible and change each time.

  Researched answer: One important distinction that I found is that classes do not need to take up memory, whereas memory space is allocated to objects when they are created. Because memory is not allocated to a class, they cannot be manipulated like objects can.



6. STRETCH: What is hoisting in JavaScript?

  Your answer: Hoisting is when the computer takes assigned variables and "hoists" them to the top of the page. Meaning that the computer will familiarize itself with variables before reading/ interpreting the rest of the code.

  Researched answer: I learned that hoisting applies to not only variables, but also to functions and classes as well. Hoisting can allow the interpreter to be aware of the function, class, or variable before it is declared.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Class Inheritance: This is where you can create a new class and have it "inherit" specific methods from a class that was previously created.

2. React: React is a library of reusable and commonly used "components". It seems like it was created so that developers can have easy access to blocks of code that will likely need to be used by many people for many types of projects. Almost sounds like a library of methods.

3. React state: State is used to determine of a react component is a logic component or a display component. Components that do hold data in a state object are considered logic components

4. React lifecycle methods: Every react component has a three phase lifecycle. The three phases of the lifecycle are mounting, updating, and unmounting.

5. DOM: This is where components are mounted and unmounted from.
