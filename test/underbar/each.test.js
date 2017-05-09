const _ = require('../../underbar');

describe('each()', () => {
  it('iterates every element of an array, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = [1, 2, 3, 4];
    let count = 0
    _.each(array, function(object, index, array) {
      expect(object).toEqual(array[index]);
      count++;
    });
    expect(count).toEqual(4);
  });

  it('iterates every element of an array-like object, passing that element, its corresponding index, and the entire array to the callback', () => {
    const array = {
      length: 2,
      key1: 'a',
      key2: 'b'
    };
    let count = 0
    _.each(array, function(object, key, arrayLike) {
      expect(object).toEqual(arrayLike[key]);
      count++;
    });
    expect(count).toEqual(2);
  });

  it('iterates every property of an object, passing the value, the corresponding key, and the entire object to the callback', () => {
    const object = {
      key0: 'z',
      key1: 'a',
      key2: 'b'
    };
    let count = 0
    _.each(object, function(element, key, objectToUse) {
      expect(element).toEqual(objectToUse[key]);
      count++;
    });
    expect(count).toEqual(3);
  });
});

