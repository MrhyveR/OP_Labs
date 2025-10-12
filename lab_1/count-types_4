'use strict';

const countTypesInArray = (meow) => {
  const counters = {};
  for (const element of meow) {
    const type = typeof element;
    const count = counters[type] || 0;
    counters[type] = count + 1;
  }
  return counters;
};

module.exports = { countTypesInArray };