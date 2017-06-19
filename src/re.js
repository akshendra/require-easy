const path = require('path');

module.exports = {
  r: require,

  rp(...args) {
    return require(path.join(...args)); // eslint-disable-line
  },
};
