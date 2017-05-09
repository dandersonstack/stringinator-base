const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const arr = ['bax', 'rol,', 'tab', 'clue'];
    const val = _.contains(arr, 'bax');
    expect(val).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const arr = ['bax', 'rol,', 'tab', 'clue'];
    const val = _.contains(arr, 'bail');
    expect(val).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const arr = {
      key1: 'bax',
      key2: 'rol,',
      key3: 'tab',
      key4: 'clue'};
    const val = _.contains(arr, 'bax');
    expect(val).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const arr = {
      key1: 'bax',
      key2: 'rol,',
      key3: 'tab',
      key4: 'clue'};
    const val = _.contains(arr, 'bail');
    expect(val).toBe(false);
  });

});