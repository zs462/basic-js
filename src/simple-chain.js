const CustomError = require("../extensions/custom-error");

const chainMaker = {
  links: [],

  getLength() {
    return this.links.length;
  },
  addLink(value) {
    if (value === null) {
      value = 'null';
    }
    if (value !== undefined) {
        //if (value) {
          this.links.push(value.toString());
        // } else {
        //   this.links.push("");
        // }
    } else {
      this.links.push("");
    }
    return this;
  },
  removeLink(position) {
    if (this.links[position - 1] === undefined) {
      throw Error;
    }
    try {
      this.links.splice(position - 1, 1);
      return this;
    } catch (err) {
      this.links = [];
      throw Error;
    }
  },
  reverseChain() {
    this.links = this.links.reverse();
    return this;
  },
  finishChain() {
    let res = "( " + this.links.join(" )~~( ") + " )";
    this.links = [];
    return res;
  }
};

module.exports = chainMaker;
