const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const arr = [1, 3, 6, 8];
    const val = _.filter(arr, item => item % 2 == 1);
    expect(val).toEqual([1, 3]);
  });

  it('filters an object to only numeric values', () => {
    const arr = [1, 3, 6, 8, 'book'];
    const val = _.filter(arr, item => typeof(item) == 'number');
    expect(val).toEqual([1, 3, 6, 8]);
  });
});