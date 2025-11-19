'use strict';

const sum = (...args) => {
  let lit = 0;
  for (let j = 0; j < args.length; j++) {
    lit += args[j];
  }
  return lit;
};

module.exports = { sum };