'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function pringAge() {
    let outPut = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(outPut);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      //creating new variable with same name as outer scope's variable
      const firstName = 'Jonas';

      //reassigning outer scope's variaböe
      outPut = 'NEW OUTPUT';
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      add(2, 3);
    }
    console.log(outPut);
  }
  pringAge();

  return age;
}
const firstName = 'Damian';

calcAge(1996);

const myName = 'jonas';

//Temporal dead zone error message/ also called tdz example. trying to log
// the variable job before defining it
// if (myName === 'jonas') {
//   console.log(`jonas is a ${job}`); //ReferenceError: Cannot access 'job' before initialization
//   const age = 2037 - 1980;
//   const job = 'teacher';
//   console.log(age);
//   console.log(x);
// }

console.log(me);
console.log(job);
console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;
