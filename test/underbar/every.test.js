const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const arr = ['bax', 'rol,', 'tab', 'clue'];
      const val = _.every(arr);
      expect(val).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [1, 3, 5, 7];
      const val = _.every(arr, item => item % 2 == 1);
      expect(val).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const arr = [1, 4, 5, 7];
      const val = _.every(arr, item => item % 2 == 1);
      expect(val).toBe(false);
    });

  });
});