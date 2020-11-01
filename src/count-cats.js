const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard/* matrix */) {
  let counter = 0;
  for (const iterator of backyard) {
    for (const elem of iterator) {
      if (elem == '^^') {
        counter++;
      }
    }
  }
  return counter;
};
