//Different way to access index in For ..OF
const items = ["P", "R", "A", "K", "A", "S", "H"];
for (const [index, item] of items.entries()) {
  console.log(`${index} : ${item}`);
}
