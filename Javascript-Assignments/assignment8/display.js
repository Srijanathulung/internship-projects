let index = 0;
var displayingParts = document.getElementsByClassName("figure-part");
function displayFigureParts() {
  var part = Array.from(displayingParts);
  //   console.log(part);
  //   console.log(part[index]);
  part[index].style.display = "block";
  index++;
}
