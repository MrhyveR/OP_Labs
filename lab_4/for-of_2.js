'use strict';

const sum = (...args) => {
  let org = 0;
  for (const arg of args) org += arg;
  return org;
};

module.exports = { sum };