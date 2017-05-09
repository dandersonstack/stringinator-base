const _ = require('../../underbar');

describe('reduce()', () => {
  it('reduces an array of numbers to a sum, *with* an explicit initial value for the accumulator', () => {
    const arr = [1,2,3,4,5];
    const val = _.reduce(arr, (sum, item) => sum + item , 10);
    expect(val).toEqual(25);
  });

  it('reduces an array of numbers to a sum, *without* an explicit initial value for the accumulator', () => {
    const arr = [1,2,3,4,5];
    const val = _.reduce(arr, (sum, item) => sum + item , 0);
    expect(val).toEqual(15);
  });

});