function toArray(obj) {
  return Object.entries(obj);
}
console.log(
  toArray({
    firstName: "John",
    lastName: "Doe",
  })
);
