module.exports = function reverse(num) {
  const reversenum = num.toString().split('').reverse().join('');
  return parseFloat(reversenum);
};
