const ourArray = ["Prakash", "M", ["cat"]];
//Delete element from of array
const removedFromOurArray = ourArray.shift();
console.log(ourArray);
//Add elements in front of array
ourArray.unshift("Happy");
console.log(ourArray);
//Add elements in end of the array
ourArray.push("Mani");
console.log(ourArray);
//Delete elements in end of the array
ourArray.pop();
console.log(ourArray);

//Remove duplicates in array
//Using Set
letters = ["P", "R", "K", "A", "S", "H"];
const unique1 = [...new Set(letters)];

//Using reduce
const unique2 = letters.reduce((result, letter) => {
  return result.includes(letter) ? result : [...result, letter];
}, []);

//using filter
const unique3 = letters.filter((letter, index) => {
  return letters.indexOf(letter) === index;
});

console.log(unique1);
console.log(unique2);
console.log(unique3);
