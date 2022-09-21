const print = (input = '', end) => {
  if (typeof(input) === 'object') {
    console.log(input);
    return;
  }
  const out = end ? `${input}${end}` : `${input}`;
  process.stdout.write(out);
};

module.exports = print;
