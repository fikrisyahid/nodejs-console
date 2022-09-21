const print = (input = '', end) => {
  if (typeof(input) === 'object') {
    console.log(input);
    return;
  }
  if (typeof(input) === 'number') {
    input = input.toString();
  }
  const out = end ? `${input}${end}` : `${input}`;
  process.stdout.write(out);
};

module.exports = print;