const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error;
  }

  let control = '';
  let res = [];
  let tmp;

  let arrKey = -1;
/*   for (const elem of arr) {
    arrKey++;
    switch (elem) {
      case '--discard-prev':
        if (res.length > 1) {
          res.pop();
        }
        break;
      case '--double-prev':
        if (res.length > 1) {
          if (arrKey > 1) {
            if (arr[arrKey - 2] == '--discard-next') {
              continue;
            }
          }
          res.push(res[res.length - 1]);
        }
        break;
      case '--discard-next':
      case '--double-next':
        control = elem;
        continue;
      default:
        if (control == '--discard-next') {
          control = '';
          continue;
        } else if (control == '--double-next') {
          control = '';
          res.push(elem);
        }
        res.push(elem);
    }
  } */
  for (const elem of arr) {
    arrKey++;
    switch (elem) {
      case '--discard-prev':
        if (arrKey > 1) {
          if (arr[arrKey - 2] == '--discard-next') {
            continue;
          }
        }
        if (res.length > 1) {
          res.pop();
        }
        break;
      case '--double-prev':
        if (res.length > 1) {
          if (arrKey > 1) {
            if (arr[arrKey - 2] == '--discard-next') {
              continue;
            }
          }
          res.push(res[res.length - 1]);
        }
        break;
      case '--discard-next':
      case '--double-next':
        control = elem;
        continue;
      default:
        if (control == '--discard-next') {
          control = '';
          continue;
        } else if (control == '--double-next') {
          control = '';
          res.push(elem);
        }
        res.push(elem);
    }
  }
  // console.log(arr);
  // console.log(res);
  // exit();
  return res;
};
