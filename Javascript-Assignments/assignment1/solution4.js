function identicalFilter(arr) {
  let result = [];
  for (i = 0; i < arr.length; i++) {
    let repetition = new Set(arr[i]);
    if (repetition.size === 1) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(identicalFilter(["88", "999", "22", "545", "133"]));
