const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const arr = [{name: 'daniel', age: 14}, 
                 {name: 'ron', age: 11}, 
                 {name: 'quill', age: 2} ];
    expect(_.pluck(arr, 'age')).toEqual([14, 11, 2]);
  });

});