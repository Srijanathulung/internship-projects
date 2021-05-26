/*question 1
Convert the list of names in array of object like*/
//solution
var nameList = `Neeta sapkota
neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;
nameList = nameList.split("\n");

function result(array) {
  return array.map(function (value, index) {
    var obj = {};
    var name = value.split(" ");
    obj["id"] = index + 1;
    obj["fName"] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
    obj["lName"] = name[1].charAt(0).toUpperCase() + name[1].slice(1);
    return obj;
  });
}

console.log(result(nameList));

/* Question 3
Convert the array of the result in Question 1, in following format*/
// solution
function result3(array) {
  var outputOfQ1 = result(nameList);
  var b = outputOfQ1.reduce(function (acc, value) {
    acc[value.id] = { fName: value.fName, lName: value.lName };
    return acc;
  }, {});
  return b;
}
console.log(result3(nameList));

/*Question 2
Given the result of the above problem, create a function which takes a character and prints the count of first names which starts with letter that letter and which donot start with given letter.
Example

find('s') -> 5 and 11
find('a') -> 0 and 16 */
//solution
function result2(array, char) {
  var outputOfQ1 = result(array);
  var finder = outputOfQ1.filter(function (value) {
    return value.fName.charAt(0).toUpperCase() == char.toUpperCase();
  });
  var startLetter = finder.length;
  var notStartLetter = outputOfQ1.length - startLetter;
  return char + ": " + startLetter + " and " + notStartLetter;
}

console.log(result2(nameList, "s"));
console.log(result2(nameList, "K"));
