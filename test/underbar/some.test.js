const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is odd', () => {
    const arr = [2, 3, 6, 8];
    const val = _.some(arr, item => item % 2 == 1);
    expect(val).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const arr = [2, 4, 6, 8];
    const val = _.some(arr, item => item % 2 == 1);
    expect(val).toBe(false);
  });

});