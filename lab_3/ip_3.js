'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const some = (res, num) => (res << 8) + parseInt(num);
  return ip.split('.').reduce(some, 0);
};

module.exports = { ipToInt };