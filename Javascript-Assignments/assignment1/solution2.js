function censor(string) {
  let words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      words[i] = "*".repeat(words[i].length);
    }
  }
  let result = words.join(" ");
  return result;
}
console.log(censor("this is an apple"));
