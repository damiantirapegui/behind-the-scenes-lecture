'use strict';

function calcAge(birthyear) {
  const age = 2037 - birthyear;

  function pringAge() {
    const outPut = `${firstName}, you are ${age}, born in ${birthyear}`;
    console.log(outPut);

    if (birthyear >= 1981 && birthyear <= 1996) {
      var millenial = true;
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
    // console.log(str);
    // console.log(millenial);
  }
  pringAge();

  return age;
}
const firstName = 'Damian';

calcAge(1996);
