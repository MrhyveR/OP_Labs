"use strict";

const range = (start = 25, end = 35) => {
  const length = end - start;
  if (length < 0) return;
  const arr = [];
  for (let i = start; i <= end; i++){
    arr.push(i);
  }
return arr;
};
const array = range(25, 35);
console.log(array);

module.exports = {range};