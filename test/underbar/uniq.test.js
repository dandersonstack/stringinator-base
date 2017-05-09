const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const arr = [1, 3, 3, 4, 4];
    const val = _.uniq(arr);
    expect(val).toEqual([1, 3, 4]);
  });
});