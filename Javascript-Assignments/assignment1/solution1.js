function generatePyramid(n) {
  for (let i = n; i >= 1; i--) {
    var arr = [];
    for (let j = 1; j <= i; j++) {
      arr.push("*");
    }
    console.log(arr.join(""));
  }
}
generatePyramid(5);
