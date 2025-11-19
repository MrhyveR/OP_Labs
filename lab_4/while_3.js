'use strict';

const sum = (...args) => {
  let j=0;
  let arg=0;
  while(j<args.length){
    arg+=args[j];
    j++;
  }
  return arg;
};

module.exports = { sum };