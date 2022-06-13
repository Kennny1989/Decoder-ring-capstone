// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    //alphabet refers to substitution alphabet
    //input can include spaces, letters, and cap char's
    let substitue = alphabet;
    let standard ="abcdefghijklmnopqrstuvwxyz";
    let result = "";//this is where we will store the message
    let array = [];
    let message = input.toLowerCase();//to ignore cap letters
//if no substitue alphabet return false
    if (!substitue || !input) {
      return false;
    }
    if (substitue.length != 26) { // if sub alpha not exactly 26 char's long
      return false;
    }
    //char's in sub alpha must be unique
    for (let characters in substitue) {
      if (array.indexOf(substitue[characters]) < 0) {
        array.push(substitue[characters]) // pushes char's into array
      } else {
        return false;
      }
    }
    for(let i = 0; i < message.length; i++) {
      if(message[i] === " ") { //maintaining spaces
        result += " ";
      } else {
        let standardAbcs = standard;
        let subAbcs = substitue;
        if(!encode) {
          standardAbcs = substitue;
          subAbcs = standard;
        };
        for(let j = 0; j < standardAbcs.length; j++) {
          if(message[i] === standardAbcs[j]) {
            result += subAbcs[j]
          }
        }
      }
    }
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
