function keysAndValues(obj) {
  let keys = Object.keys(obj);
  let sortedKeysArray = keys.sort();

  let sortedValues = [];
  for (i = 0; i < keys.length; i++) {
    sortedValues[i] = obj[keys[i]];
  }
  return [keys, sortedValues];
}

console.log(
  keysAndValues({
    firstName: "John",
    lastName: "Doe",
  })
);
