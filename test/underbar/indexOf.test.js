const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 1)).toEqual(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 4)).toEqual(arr.length - 1);
  });

  it('returns -1 for a missing value', () => {
    const arr = [1, 2, 3, 4];
    expect(_.indexOf(arr, 7)).toEqual(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const arr = [1, 2, 3, 4, 2, 3, 4];
    expect(_.indexOf(arr, 3)).toEqual(2);
  });

  it('starts searching at the given offset', () => {
    const arr = [1, 2, 3, 4, 2, 3, 4];
    expect(_.indexOf(arr, 3, 4)).toEqual(5);
  });

});