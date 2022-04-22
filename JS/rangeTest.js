import { range } from "./range";
//const { range } = require("./range");

//Other option without using generators and iterators
function rangeOther(end, start = 0, step = 1) {
  return Array.from(
    {
      length: (end - start) / step + 1,
    },
    (_, i) => start + i * step
  );
}

const r1 = [...range(7)];
const r2 = [...range(10, 4)];
const r3 = [...range(12, 0, 2)];

console.log(r1);
console.log(r2);
console.log(r3);
