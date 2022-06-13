// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    let alphabet = {  //keys and values from polybius square
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
      };

      if(!input) false; //no input to return

      let result = "";

      if(input){
        let inputLower = input.toLowerCase()// ignores capital letters
        if(encode){
          for(let i = 0; i < input.length; i++){
            let letter = inputLower[i];
            if(letter === "i" || letter === "j"){
              result += alphabet["i"];
            } else if (letter === " "){ // maintaining spaces
              result += " ";
            } else {
              let matches = Object.entries(alphabet).find((key) => letter === key[0]);//returns arrays key value as a pair as a string then finds the matching letters
              result += matches[1];
            }
          }

        } else {
          let counter = 0;
          for(let i = 0; i < input.length; i++){
            if(input[i] != " "){// maintaing spaces
              counter++
            }
          }
          // when decoding, the number of char's in a string not including spaces should be even if not return false
          if(counter % 2 != 0){
            return false;
          }
          for(let i = 0; i < input.length; i += 2){
            let number = `${input[i]}${input[i+1]}`;
            if(number.includes(" ")){// maintaing spaces
              result += " ";
              i -= 1;
            } else if (number === "42"){// i and j share same space
              result += "(i/j)";
            } else {
              let matches = Object.entries(alphabet).find((value) => number === value[1]);//// returns arrays with key value pairs as strings then finds matching numbers
              if(matches){
                result += matches[0];//adds in letters from key value pairs
              }
            }
          }
        }
      }
      return result;
      
  }

  return {
    polybius,
  };
})();


module.exports = { polybius: polybiusModule.polybius };
