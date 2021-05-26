//Write a function that returns the longest sequence of consecutive zeroes in a binary string.
function longestZero(str) {
  return str.split("1").sort().pop().length;
}

console.log(longestZero("01100001011000"));

//Create a function that takes a string and replaces the vowels with another character.
//a = 1, e = 2, i = 3, o = 4, u = 5

function LetterChanges(text) {
  var str = text.split("");
  for (var i = 0; i < text.length; i++) {
    switch (str[i]) {
      case "a":
        str[i] = 1;
        break;
      case "e":
        str[i] = 2;
        break;
      case "i":
        str[i] = 3;
        break;
      case "o":
        str[i] = 4;
        break;
      case "u":
        str[i] = 5;
        break;
      default:
        str[i];
    }
  }
  return str.join("");
}

console.log(LetterChanges("karachi"));
console.log(LetterChanges("chembur"));
console.log(LetterChanges("khandbari"));
