const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members/* members */) {
  let resArr = [];

  try {
    for (const iterator of members) {
      if (typeof iterator === 'string') {
        resArr.push(iterator.trim().slice(0, 1).toUpperCase());
      }
    }
  } catch (err) {
    return false;
  };
  resArr.sort();

  return resArr.join('');
};
