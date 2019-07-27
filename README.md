[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/software-engineering-immersive/)

# Modern JavaScript

## Agenda

1. Strict mode
2. Arrow functions
3. forEach
4. Map
5. Filter
6. Reduce
7. Keep Going
8. Practice

## Preparation

1. Fork and clone
2. Create a new branch, `training`, for your work and change into it.
3. Create a new `code` directory and `cd` into it.

### Strict mode

It’s time to take the training wheels off JavaScript and start using its strict mode to eliminate some of JavaScript’s silent errors by changing them to throw errors. And, as a nice side effect, we end up helping JavaScript engines to perform optimizations on our code to run it faster.

```js
'use strict';
```

Examples of strict mode in action:

```js
'use strict';
                       // Assuming a global variable mistypedVariable exists
mistypeVariable = 17;  // this line throws a ReferenceError due to the 
                       // misspelling of variable
```

```js
'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError
var NaN = 5; // throws a TypeError
```

#### Lab: (15 mins)

Read the resources below and experiment with what you know of JavaScript in the strict mode to see how it behaves differently.

**TODO:** Share your findings in the Slack Thread for the Lab with the rest of the class.

**Resources:**

1. [MDN: Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode)
2. [MDN: Transitioning to strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode/Transitioning_to_strict_mode)
3. [CanIUse: ECMAScript 5 Strict Mode](https://caniuse.com/#feat=use-strict)


### Arrow functions

ES6 introduces a new syntax for writing anonymous functions in JavaScript. It has a much more concise syntax and should be easier to pick up after using function expressions. Arrow functions gets its name from its syntax `=>`, which in other languages, is knows as: the fat arrow, the rocket or the Lamda operator.

**Example 1:**

```js
// Function Declaration
function sayHello() {
  console.log('Hello World!');  // Block of statements
}

// Function Expression
const sayHello = function() {
  console.log('Hello World!');  // Block of statements
}

// Arrow function expression
const sayHello = () => {
  console.log('Hello World!');  // Block of statements
}

// Arrow function expression (compact)
const sayHello = () => console.log('Hello World!');  // Expression

// Arrow function expression (compact) with single param
const greetWorld = greeting => console.log(`${greeting} World!`); // Expression

// Arrow function expression (compact) with single param & return value
const greetWorld = greeting => `${greeting} World!`;  // Expression
```

**Example 2:**

```js
// Function Declaration
function add(x, y) {
  return x + y;
}

// Function Expression
const add = function(x, y) {
  return x + y;
}

// Arrow function expression
const add = (x, y) => {
  return x + y;
}

// Arrow function expression with implicit return
const add = (x, y) => x + y;
```

#### Lab: (15 mins)

##### Convert the following functions to arrow functions.

```js
function addFive(num) {
  return 5 + num;
}

function divide(num1, num2) {
  return num1 / num2;
}

function whoIsTheBestIA() {
  let iaName = 'Alanoud';
  console.log(iaName);
}
```

Your solution:

```js

```

##### Create a function called `fullName`

`fullName` receives two parameters, `first` and `last` and returns the full name.

**Steps:**

1. Use the function keyword to write a function expression
2. Rewrite using an arrow function
3. Rewrite and use implicit return

Your solution:

```js

```

##### Turn `sayHello` into an arrow function

```js
function sayHello(name = "World") {
  console.log("Hello " + name);
}

sayHello();
```

Your solution:

```js

```

**Resources:**

1. [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
2. [ES6 In Depth: Arrow functions" on hacks.mozilla.org](https://hacks.mozilla.org/2015/06/es6-in-depth-arrow-functions/)


### forEach

JavaScript has a lot of different types of loops available for you to use. But when dealing with Arrays or iterable objects, the `forEach` method is one of the more easier and cleaner ones to use.

It executes a function callback for each array item it is iterating on. The function callback provides you the value and index for the current item being iterated on.

Though, one downside of using the `forEach` method is that there is no way to break the loop other then by throwing an exception. If you need such behavior, the `forEach()` method is the wrong tool for the job.

Lastly, the `forEach` method always returns the value `undefined`.

#### Example 1: Using forEach

```js
const instructors = ['Usman', 'Marc', 'Alanoud'];

// Print each instructor
instructors.forEach(function(element) {
  console.log(element);
});


// Print each instructor along with their Array index
instructors.forEach(function(element, index) {
  console.log(element, index);
});
```

#### Example 2: Converting a for-loop to forEach

```js
const instructors = ['Usman', 'Marc', 'Alanoud'];
const instructorsCopy = [];

// For Loop
for (let i = 0; i < instructors.length; i++) {
  instructorsCopy.push(instructors[i]);
}

// forEach Loop
instructors.forEach(function(item){
  instructorsCopy.push(item);
});
```

#### Lab: (15 mins)

1. Say Hi
    ```js
    const friends = ["Mansour", "Munira", "Ahmed"];

    // For each friend in friends, print "Hi friendName!"
    // Write your solution here
    ```
2. Crazy Numbers
    ```js
    // Thats an array with crazy numbers we cant read 😯
    const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
    let total = 0;

    // Sum all the numbers in nums and save the result in total
    // Write your solution here
    ```
3. Crazy number again!!
    ```js
    // These crazy numbers now are strings 😯 😯  !!  
    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
    let totalNumbersUnder4000 = 0;

    // Convert numbers from strings to numbers and 
    // sum all numbers under 4000 and store them 
    // in totalNumbersUnder4000
    //
    // Write your solution here
    ```

**Resources:**

1. [MDN: forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

### Map: Team Study (30 mins)

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

**Resources:**

1. [Learn & Understand JavaScript’s Map Function](https://codeburst.io/learn-understand-javascripts-map-function-ffc059264783)
2. [MDN: .map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
3. [Video: Map](https://youtu.be/bCqtb-Z5YGQ)

#### Lab: (30 mins)

1. Multiply by 100
    ```js
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let times100 = [];

    // Write your solution here
    ```
2. Capitalize
    Capitalize all the strings in the IA's array and store them in the array capitalizedIA.

    ```js
    const iAS = ['alanoud', 'khalid', 'shaima', 'hakami'];
    let capitalizedIAs = [];

    // Write your solution here
    ```
3. Abbreviations
    ```js
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dayAbbreviations = [];

    // Find the abbreviation of all days and add them to dayAbbreviations array
    // Write your solution here
    ```
4. century20
    ```js
    const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
    let century20 =  []; 

    // century20 should be: [1989, 2000, 1999, 1973]
    // Write your solution here
    ```


### Filter: Team Study (30 mins)

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function.

**Resources:**

1. [Learn & Understand JavaScript’s Filter Function](https://codeburst.io/learn-understand-javascripts-filter-function-bde87bce206)
2. [MDN: .filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

#### Lab: (15 mins)

1. Only get the numbers that are divisible by 3
    ```js
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // Write your solution here
    console.log(result);
    ```
2. Create an array of names (maybe use 3 of your friends)

    Requirements:

    1. Use filter to return the names with the letter "a" in them
    2. Use Arrow function
    3. Use implicit return
    ```js
    const names = ["Sara", "Abdulrahman", "Eman"];
    // Write your solution here
    console.log(result);
    ```
3. century20
    ```js
    const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
    let century20 = []; 

    // century20 should be: [1989, 2000, 1999, 1973]
    // Write your solution here
    ```


### Reduce: Team Study (30 mins)

The `reduce()` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

**Resources:**

1. [Learn & Understand JavaScript’s Reduce Function](https://codeburst.io/learn-understand-javascripts-reduce-function-b2b0406efbdc)
2. [MDN .reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
3. [Video: Reduce](https://youtu.be/Wl98eZpkp-c)

#### Lab: (15 mins)

1. Sum
    ```js
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum;

    // Write your solution here

    console.log(sum);
    ```
2. Crazy Numbers
    ```js
    // Thats an array with crazy numbers we cant read 😯
    const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
    let total = 0;

    // Sum all the numbers in nums and save the result in total
    // Write your solution here
    ```
3. Crazy number again!!
    ```js
    // These crazy numbers now are strings 😯 😯  !!  
    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
    let totalNumbersUnder4000 = 0;

    // Convert numbers from strings to numbers and 
    // sum all numbers under 4000 and store them 
    // in totalNumbersUnder4000
    //
    // Write your solution here
    ```

### Keep Going

There are a lot of features in ES6 that we have not covered:

- [Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Spread operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### Practice

#### Map

There's a sale going on! Create a variable called `discountProducts` that takes all the objects in products and cuts the price by 50%.

```js
const products = [
  {name: 'flower vase', price: 75},
  {name: 'lamp', price: 85},
  {name: 'jar of honey', price: 95},
  {name: 'coil', price: 65},
  {name: 'lumber', price: 55}
];

// Write your solution here

console.log(discountProducts);
```

#### Filter

Create a variable called `cheapProducts` that contains an array of objects for all products that cost less than 70.

```js
const products = [
  { name: 'flower vase',   price: 75 },
  { name: 'lamp',  price: 85 },
  { name: 'jar of honey',   price: 95 },
  { name: 'seashell frame', price: 65 },
  { name: 'lumber',  price: 55 }
];

// Write your solution here

console.log(cheapProducts);
```

#### Reduce

Create a variable called `totalPrice`, and use `.reduce` to get the sum of all prices.

```js
const products = [
  {name: 'flower vase', price: 75},
  {name: 'lamp', price: 85},
  {name: 'jar of honey', price: 95},
  {name: 'coil', price: 65},
  {name: 'lumber', price: 55}
];

// Write your solution here

console.log(totalPrice);
```

#### Given the following arrays:

```js
const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826, 209, 419, 309, 48, 738, 709,728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330, 736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5, 13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6, 10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]
```

##### [every](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

- Determine if every number is greater than or equal to 0
- Determine if every word is shorter than 8 characters

##### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- Filter the array for numbers less than 100
- Filter words that have an even length

##### [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

- Find the first value divisible by 5
- Find the first word that is longer than 6 characters

##### [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
- Find the index of the first number that is divisible by 3
- Find the index of the first word that is less than 2 characters long

##### [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- `console.log` each value of the nums array multiplied by 3
- `console.log` each word with an exclamation point at the end of it

##### [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- Make a new array of each number multiplied by 100
- Make a new array of all the words in all uppercase

##### [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- Add all the numbers in the array together using the `reduce` method
- Concatenate all the words using reduce

##### [some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
- Find out if some numbers are divisible by 7
- Find out if some words have the letter `a` in them

##### [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
- Try to sort without any arguments, do you get what you'd expect with the numbers array?
- Sort the numbers in ascending order
- Sort the numbers in descending order
- Sort the words in ascending order
- Sort the words in descending order

##### Bonus

- Filter for words that have at least two vowels in them
- Find each instance of the word zephyr - include case insensitve and plurals (Zephyr, zephyrs, and Zephyrs), and list the index positions