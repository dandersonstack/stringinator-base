const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    const val = null;
    expect(_.identity(val)).toEqual(val);
  });

  it('returns the number if given a number', () => {
    const val = 1;
    expect(_.identity(val)).toEqual(val);
  });

  it('returns the same array if given an array', () => {
    const val = [1, 2, 3];
    expect(_.identity(val)).toEqual(val);
  });

  it('returns the same object if given an object', () => {
    const val = {
      val1: 'a',
      val2: 'b'
    };
    expect(_.identity(val)).toEqual(val);
  });
});