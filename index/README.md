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


.......
function divide(num1, num2) {
  return num1 / num2;
}

  ........

function whoIsTheBestIA() {
  let iaName = 'Alanoud';
  console.log(iaName);
}


Your solution:

```js
sol:
 let addFive=num=>  5 + num;

console.log(addFive(4)); 
......
sol: let divide=(num1, num2) => num1 / num2;
  console.log(divide(4,4)); 
  .....
   sol: let whoIsTheBestIA=() =>{let iaName = 'Alanoud';
    console.log(iaName);}
    console.log(whoIsTheBestIA()); 

```

##### Create a function called `fullName`

`fullName` receives two parameters, `first` and `last` and returns the full name.

**Steps:**

1. Use the function keyword to write a function expression
2. Rewrite using an arrow function
3. Rewrite and use implicit return

Your solution:

```js
let fullName=function(first,last){
   return `${first} ${last}`
}
console.log(fullName('Ashwag','saud'));
let fullName =(first,last)=> {return`${first} ${last}`}
console.log(fullName('Ashwag','saud'));

let fullName =(first,last)=> `${first} ${last}`
console.log(fullName('Ashwag','saud'));


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
let sayHello=(name = "World") =>  console.log("Hello " + name);
  
  
  sayHello();
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
    const friends = ["Mansour", "Munira", "Ahmed"];
friends.forEach(function(item){
    console.log(`Hi ${item}`)
})
    ```
2. Crazy Numbers
    ```js
    // Thats an array with crazy numbers we cant read 😯
    const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
    let total = 0;

let total = 0;
nums.forEach(function(item){
    total+=item;

})
console.log(total);


    ```
3. Crazy number again!!
    ```js
    // These crazy numbers now are strings 😯 😯  !!  
    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
    let totalNumbersUnder4000 = 0;

    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
let totalNumbersUnder4000 = 0;
let k=parseFloat (stringNumbers);
console.log(k);
let m=[];
for(let i=0;i<m.length;i++){
    m.push(Integer.parseInt(str));
    intarray[i]=Integer.parseInt(str)
    console.log(m);
    console.log(intarray);
}
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
  console.log(times100);
    var times100 = nums.map(function (item) {
        return item*100
      }); 
    ```
2. Capitalize
    Capitalize all the strings in the IA's array and store them in the array capitalizedIA.

    ```js
    const iAS = ['alanoud', 'khalid', 'shaima', 'hakami'];
    let capitalizedIAs = [];
    var capitalizedIAs = iAS.map(function (item) {
    return item.toUpperCase();
  });   
    console.log(capitalizedIAs);



    ```
3. Abbreviations
    ```js
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dayAbbreviations = days.map(function(item){
    return item.slice(0,3);});console.log(dayAbbreviations);

    

    ```
4. century20
    ```js
    const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
    let century20 =  []; 
    let century20 = years.filter(function(item){
    return item<=2000;
   });console.log(century20);
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
  var result = numss.filter(function(number) {
    return (number % 3==0);
  });console.log(result);
    ```
2. Create an array of names (maybe use 3 of your friends)

    Requirements:

    1. Use filter to return the names with the letter "a" in them
    2. Use Arrow function
    3. Use implicit return
    ```js
    const names = ["Sara", "Abdulrahman", "Eman"];var result = names.filter(function(item) {
    return item.includes("a");
  });console.log(result);
    ```
3. century20
    ```js
    const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
    let century20 = []; 

  var summ = numsz.reduce(function(sum,item) {
    return sum+=item;
  });console.log(summ);

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
    var summ = numsz.reduce(function(sum,item) {
    return sum+=item; });console.log(summ); 
    ```
2. Crazy Numbers
    ```js
    // Thats an array with crazy numbers we cant read 😯
    const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
    let total = 0;
    var totalNumbersUnderr4000 = stringNumberss.reduce(function(sum,item) {
    totalNumbersUnderr4000=parseFloat(stringNumberss);
    console.log(totalNumbersUnderr4000);
    if(item<=4000){
        sum+=item;
    }
  });

console.log(totalNumbersUnderr4000);

    // Sum all the numbers in nums and save the result in total
    // Write your solution here
    ```
3. Crazy number again!!
    ```js
    // These crazy numbers now are strings 😯 😯  !!  
    const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
    var totalNumbersUnderr4000 = stringNumberss.reduce(function(sum,item) {
    totalNumbersUnderr4000=parseFloat(stringNumberss);
    console.log(totalNumbersUnderr4000);
    if(item<=4000){
        sum+=item;
    }
  });

console.log(totalNumbersUnderr4000);
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


let discountProducts = products.map(function(item){
  const newProduct = {...product};
  newProduct.price /= 2;
  return newProduct;
});
console.log(newProduct);
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
  var totalPrice = product.filter(function(item) {
    const newProduct = {...product};
    newProduct.price<=70;
    return newProduct;
   

  });
  console.log(totalPrice);

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

 var totalPrice = productt.reduce(function(sum , item) {
  item.price+=item.price
  return item.price;

  });

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

function isbelowThreshold(smallNumss) {
    return smallNumss >= 0;
  }
  console.log(smallNumss.every(isbelowThreshold));

  function isBelowThreshold(numszl) {
    return numszl >= 0;
  }

  function shorterz(panagram) {
    return panagram.length <= 8;
  }
  console.log(panagram.every(shorterz));


  function shorter(panagrams) {
    return panagrams.length <= 8;
  }
  console.log(panagrams.every(shorter));

##### [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

  var resultz = smallNumss.filter(function(item) {
    return item<=100;  });
console.log(resultz);

let resultr = panagram.filter(panagram => panagram.length %2== 0);
console.log(resultr);

let resultrz = panagrams.filter(panagrams => panagrams.length %2== 0);
console.log(resultrz);

##### [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
var found = smallNumss.find(function(element) {
    return (element%5==0);
  });
  
  console.log(found);
  var found2 = numszl.find(function(element) {
    return (element%5==0);
  });
  

  const resul = panagram.find(panagram => panagram.length %2==0);
  
  console.log(resul);

  const resu = panagrams.find(panagrams => panagrams.length %2==0);
  
  console.log(resu);

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