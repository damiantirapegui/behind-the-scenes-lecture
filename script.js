'use strict';

// function calcAge(birthyear) {
//   const age = 2037 - birthyear;

//   function pringAge() {
//     let outPut = `${firstName}, you are ${age}, born in ${birthyear}`;
//     console.log(outPut);

//     if (birthyear >= 1981 && birthyear <= 1996) {
//       var millenial = true;
//       //creating new variable with same name as outer scope's variable
//       const firstName = 'Jonas';

//       //reassigning outer scope's variaböe
//       outPut = 'NEW OUTPUT';
//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str);
//       function add(a, b) {
//         return a + b;
//       }
//       add(2, 3);
//     }
//     console.log(outPut);
//   }
//   pringAge();

//   return age;
// }
// const firstName = 'Damian';

// calcAge(1996);

// const myName = 'jonas';

//Temporal dead zone error message/ also called tdz example. trying to log
// the variable job before defining it
// if (myName === 'jonas') {
//   console.log(`jonas is a ${job}`); //ReferenceError: Cannot access 'job' before initialization
//   const age = 2037 - 1980;
//   const job = 'teacher';
//   console.log(age);
//   console.log(x);
// }

// Variables
// console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// Functions
// console.log(addExpr(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// // console.log(this);

// const calcAge = function (birthyear) {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// const calcAgeArrow = birthyear => {
//   console.log(2037 - birthyear);
//   console.log(this);
// };

// calcAge(1990);
// calcAgeArrow(1980);

// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     self = this;
//     const isMillenialTwo = function () {
//       //Här sätter vi self med ett värde av this innan för objektet. Functionen letar efter self som är this
//       //Ovanför i scope området
//       console.log(self.year >= 1981 && self.year <= 1996);
//     };

//     const isMillenial = function () {
//       // Resultatet blir undefined eftersom detta är en vanlig funktions anrop.
//       //Skulle vi sätta anropen utanför jonas objektet skulle vi få samma resultat.
//       // Däremot så kan vi komma runt detta genom att använda self eller that variabeln som vi sätter innanför objektet.

//       console.log(this.year >= 1981 && this.year <= 1996);
//     };

//     const isMillenialArrow = () => {
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenialArrow();
//     isMillenialTwo();
//     isMillenial();
//   },
//   greet: () => {
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// // jonas.greet();
// jonas.calcAge();

//Primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Before marriage: ', jessica);
console.log('After marriage: ', marriedJessica);

// marriedJessica = {};

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
jessica2.family.push('Alex', 'Adam');
console.log('Before marriage: ', jessica2);
console.log('After marriage: ', jessicaCopy);
