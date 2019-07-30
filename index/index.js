// 'use strict';

// console.log('hi');
// // fun exp
// // let sayhello=function()
// // {console.log('hello');}

// // sayhello();

// // fun dec
// // function sayhello ()
// // {console.log('hello');}

// // sayhello()

// //arrow fun
// // let sayhello=() =>
// // {console.log('hello');}

// // sayhello();
// //1line
// // let sayhello=(s) => console.log(`hello ${ s } `+s);

// // sayhello('Ashwag');
// let sayhello=s => `hello ${ s } `;

// let r=sayhello('Ashwag');
// console.log(r);


//  let addFive=num=>  5 + num;

// console.log(addFive(4)); 

//   let divide=(num1, num2) => num1 / num2;
//   console.log(divide(4,4)); 

//   let whoIsTheBestIA=() =>{let iaName = 'Alanoud';
//     console.log(iaName);}
//     console.log(whoIsTheBestIA()); 


    
// // `fullName` receives two parameters, `first` and `last` and returns the full name.

// // **Steps:**

// // 1. Use the function keyword to write a function expression
// // 2. Rewrite using an arrow function
// // 3. Rewrite and use implicit return

// //fun exp
// // let fullName=function(first,last){
// //    return `${first} ${last}`
// // }
// // console.log(fullName('Ashwag','saud'));
// // let fullName =(first,last)=> {return`${first} ${last}`}
// // console.log(fullName('Ashwag','saud'));

// // let fullName =(first,last)=> `${first} ${last}`
// // console.log(fullName('Ashwag','saud'));
// let sayHello=(name = "World") =>  console.log("Hello " + name);
  
  
//   sayHello(); 

// let m=['a','b','c'];
// // for (let i=0;i<m.length;i++){

// //     console.log(m[i]);
// // }
// // m.forEach(function(element, index){console.log(element,index)})
// // m.forEach((element,index) => console.log(element,index) );

// let m2=[];
// // for(let i=0;i<m.length;i++){
// //     m2.push(m[i]);
// // }
// m.forEach(function(item){
//     m2.push(item);
// });
// console.log(`m2 is ${m2}`);

// const friends = ["Mansour", "Munira", "Ahmed"];
// friends.forEach(function(item){
//     console.log(`Hi ${item}`)
// })
// const nums = [103440, 3799.2663, 3.14159265359, 859494, 59439];
// let total = 0;
// nums.forEach(function(item){
//     total+=item;

// })
// console.log(total);

// const stringNumbers = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];
// let totalNumbersUnder4000 = 0;
// let k=parseFloat (stringNumbers);
// console.log(k);
// m all numbers under 4000 and store them
// let m=[];
// for(let i=0;i<m.length;i++){
//     m.push(Integer.parseInt(str));
//     intarray[i]=Integer.parseInt(str)
//     console.log(m);
//     console.log(intarray);
// }

// let intarray,i,Integer;
// let m2=[];
// stringNumbers.forEach(function(item){
    
//     m2.push(item);
    
// })
// console.log(m2);
// parseFloat (m2);
// console.log(m2[1]+m2[2]);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let times100 = [];
// nums.forEach(function(item){
//     times100.push(item*100);
//     });
    console.log(times100);
    var times100 = nums.map(function (item) {
        return item*100
      });    console.log(times100);

    const iAS = ['alanoud', 'khalid', 'shaima', 'hakami'];

var capitalizedIAs = iAS.map(function (item) {
    return item.toUpperCase();
  });   
    console.log(capitalizedIAs);

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = days.map(function(item){
    return item.slice(0,3);

});
console.log(dayAbbreviations);


const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];
let century20 = years.filter(function(item){
    return item<=2000;
   
});

console.log(century20);

const numss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Write your solution here
var result = numss.filter(function(number) {
    return (number % 3==0);
  });
console.log(result);

const names = ["Sara", "Abdulrahman", "Eman"];
var result = names.filter(function(item) {
    return item.includes("a");
  });
console.log(result);



const numsz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum;

var summ = numsz.reduce(function(sum,item) {
    return sum+=item;
  });

console.log(summ);


const nums2 = [103440, 3799.2663, 3.14159265359, 859494, 59439];
var totall = nums2.reduce(function(sum , item) {
    return sum+=item;
  });

console.log(totall);


const stringNumberss = ["103440", "3799.2663", "3.14159265359", "859494", "59439"];



var totalNumbersUnderr4000 = stringNumberss.reduce(function(sum,item) {
    totalNumbersUnderr4000=parseFloat(stringNumberss);
    console.log(totalNumbersUnderr4000);
    if(item<=4000){
        sum+=item;
    }
  });

console.log(totalNumbersUnderr4000);


// let t=['800']
// let r=parseFloat(t);
// console.log(parseFloat(r+6));




const products = [
    {name: 'flower vase', price: 75},
    {name: 'lamp', price: 85},
    {name: 'jar of honey', price: 95},
    {name: 'coil', price: 65},
    {name: 'lumber', price: 55}
  ];
  
  // Write your solution here
  
//   console.log(discountProducts);



let discountProducts = products.map(function(item){
    item.price = item.price/2 ;
    return item;
});
console.log(discountProducts);


const product = [
    { name: 'flower vase',   price: 75 },
    { name: 'lamp',  price: 85 },
    { name: 'jar of honey',   price: 95 },
    { name: 'seashell frame', price: 65 },
    { name: 'lumber',  price: 55 }
  ];

  var totalPrice = product.filter(function(item) {

    return item.price<=70;

  });
  console.log(totalPrice);



  const productt = [
    {name: 'flower vase', price: 75},
    {name: 'lamp', price: 85},
    {name: 'jar of honey', price: 95},
    {name: 'coil', price: 65},
    {name: 'lumber', price: 55}
  ];
  
  // Write your solution here
  var totalPrice = productt.reduce(function(sum , item) {
  item.price+=item.price
  return item.price;

  });

  console.log(totalPrice);



  const smallNumss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const numszl = [ 37, 826, 209, 419, 309, 48, 738, 709,728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330, 736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5, 13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6, 10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog'];

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ];


function isbelowThreshold(smallNumss) {
    return smallNumss >= 0;
  }
  console.log(smallNumss.every(isbelowThreshold));

  function isBelowThreshold(numszl) {
    return numszl >= 0;
  }
  console.log(numszl.every(isBelowThreshold));


  function shorterz(panagram) {
    return panagram.length <= 8;
  }
  console.log(panagram.every(shorterz));


  function shorter(panagrams) {
    return panagrams.length <= 8;
  }
  console.log(panagrams.every(shorter));


  var resultz = smallNumss.filter(function(item) {
    return item<=100;  });
console.log(resultz);

let resultr = panagram.filter(panagram => panagram.length %2== 0);
console.log(resultr);

let resultrz = panagrams.filter(panagrams => panagrams.length %2== 0);
console.log(resultrz);

var found = smallNumss.find(function(element) {
    return (element%5==0);
  });
  
  console.log(found);
  var found2 = numszl.find(function(element) {
    return (element%5==0);
  });
  
  console.log(found2);

//   var found22 = panagram.find(function(element) {
//     return (element%2==0);
//   });
  
//   console.log(found22);

  const resul = panagram.find(panagram => panagram.length %2==0);
  
  console.log(resul);

  const resu = panagrams.find(panagrams => panagrams.length %2==0);
  
  console.log(resu);
