const _ = require('./underbar');

const first = function(str, n) {
  return _.first(str, n);
};

const last = function(str, n) {
  return _.last(str, n);
};

const removeChar = function(str, target) {
  // hint: use _.reject
  const arr = _.reject(str, char => char == target)
  return arr.join("");
};

const hasChar = function(str, target) {
  // hint: use _.some
  return _.some(str, item => item === target);
};

const isOnlyDigits = function(str) {
  return _.every(str, char => !isNaN(parseInt(char, 10)));
};

const filterToOnlyDigits = function(str) {
  const arr = _.filter(str, char => !isNaN(parseInt(char, 10)));
  return arr.join("");
};

const truncateString = function(val, maxLength) {
  // A freebie solution, this is the ONLY method here that doesn't use Underbar.
  return String(val).slice(0, maxLength);
};

const truncateLongItems = function(obj, maxLength) {
  // hint: use truncateString above
  return _.map(obj, item => truncateString(item.toString(), maxLength));
};

const countChars = function(str) {
  const charCount = {};
  _.each(str, item => {
    if (item in charCount){
      charCount[item] += 1;
     }else {
      charCount[item] = 1;
     }
  });
  return charCount;
};

const dedup = function(str) {
  const arr = _.uniq(str);
  return arr.join("");
};

module.exports = {
  first: first,
  last: last,
  hasChar: hasChar,
  removeChar: removeChar,
  isOnlyDigits: isOnlyDigits,
  filterToOnlyDigits: filterToOnlyDigits,
  countChars: countChars,
  dedup: dedup,
  truncateLongItems: truncateLongItems,
  truncateString: truncateString
};