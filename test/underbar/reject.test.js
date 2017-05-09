const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const arr = [1, 3, 6, 8];
    const val = _.reject(arr, item => item % 2 == 1);
    expect(val).toEqual([6, 8]);
  });

  it('rejects null values from an object', () => {
    const arr = [1, 3, null, null];
    const val = _.reject(arr, item => item === null);
    expect(val).toEqual([1, 3]);
  });
});