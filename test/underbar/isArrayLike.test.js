const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const arr = [1, 2, 3, 4];
    expect(_.isArrayLike(arr)).toEqual(true);
  });

  it('returns true for an array-like object', () => {
    const arr = {
      length: 2,
      arr1 : 'bax',
      arr2 : 'rax'
    };
    expect(_.isArrayLike(arr)).toEqual(true);
  });

  it('returns false for a non-array-like object', () => {
    const arr = {
      arr1 : 'bax',
      arr2 : 'rax'
    };
    expect(_.isArrayLike(arr)).toEqual(false);
  });
});
