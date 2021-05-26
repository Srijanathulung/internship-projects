//HEADER
var header = document.createElement("h1");
header.classList.add("heading");
header.innerHTML = "Hangman";
document.body.appendChild(header);

var breakline = document.createElement("br");
header.appendChild(breakline);

//SUBHEADER
var subHeader = document.createElement("span");
subHeader.classList.add("sub-header");
subHeader.innerHTML = "Find the hidden word- Enter a letter";
header.appendChild(subHeader);

//WRONGwORDS
var wrongDiv = document.createElement("div");
wrongDiv.classList.add("wrong-div");
document.body.appendChild(wrongDiv);
var wrongWords = document.createElement("div");
wrongWords.classList.add("wrong");
wrongWords.innerHTML = "Wrong words";
wrongDiv.appendChild(wrongWords);

var breakline = document.createElement("br");
wrongWords.appendChild(breakline);
//DASHDIV
var dashDiv = document.createElement("div");
dashDiv.classList.add("dash-div");
document.body.appendChild(dashDiv);

//HINTS
var hint = document.createElement("h2");
hint.innerHTML = "Hint: types of fruits";
document.body.appendChild(hint);

var fruits = [
  "apple",
  "mango",
  "banana",
  "watermelon",
  "grapes",
  "pineapple",
  "guava",
];

var fruitList = fruits[Math.floor(Math.random() * fruits.length)];
console.log(fruitList);
var correctlyGuessedLetters = [];
for (var i = 0; i < fruitList.length; i++) {
  var letterDash = document.createElement("div");
  letterDash.classList.add("dashes");
  dashDiv.appendChild(letterDash);
}
var wrongLetters = [];
var wrongGuess = document.createElement("span");
wrongGuess.id = "wrong-letter";
wrongWords.appendChild(wrongGuess);

var dashBox = document.getElementsByClassName("dashes");

//toast-message
var toast = document.createElement("div");
toast.classList.add("message");
document.body.appendChild(toast);
var notification = document.createElement("h3");
notification.innerHTML = "Already guessed";

toast.appendChild(notification);

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (fruitList.includes(e.key)) {
    if (correctlyGuessedLetters.includes(e.key)) {
      // console.log("already guessed ", e.key);
      toast.style.display = "block";
      setTimeout(() => {
        toast.style.display = "none";
      }, 1000);
    }
    for (var j = 0; j < fruitList.length; j++) {
      if (fruitList[j] === e.key) {
        correctlyGuessedLetters.push(e.key);
        dashBox[j].innerHTML = e.key;

        if (correctlyGuessedLetters.length === fruitList.length) {
          var winBox = document.getElementById("winBox");
          console.log("you win");
          winBox.style.display = "block";
        }
      }
    }
  } else {
    displayFigureParts();

    wrongGuess = document.getElementById("wrong-letter");
    // console.log(wrongGuess);
    if (!wrongLetters.includes(e.key)) {
      wrongLetters.push(e.key);
    } else {
      toast.style.display = "inline-block";
      setTimeout(() => {
        toast.style.display = "none";
      }, 1000);
    }
    if (wrongLetters.length === 6) {
      console.log("you lose");
      var lossBox = document.getElementById("lossBox");
      lossBox.style.display = "inline-block";
    }
    wrongGuess.innerHTML = wrongLetters.join(",");
    console.log(wrongLetters);
  }
});
