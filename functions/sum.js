const sum = (input) => {
  if (typeof(input) !== 'object') {
    console.log('Invalid sum input');
    return;
  }
  return input.reduce((prev, cur) => prev + cur);
};

module.exports = sum;
