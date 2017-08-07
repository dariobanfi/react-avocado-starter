import removeNil from '../../../../app/utils/arrays/removeNil';

describe('removeNil', () => {
  test('should do nothing if there are no null/undefined values', () => {
    const array = ['val1', 'val2', 'val3'];
    expect(removeNil(array)).toEqual(array);
  });

  test('should remove undefined and null values', () => {
    const array = ['val1', 'val2', undefined, 'val3', null];
    expect(removeNil(array)).toEqual(['val1', 'val2', 'val3']);
  });

  test('should do nothing on an empty array', () => {
    const array = [];
    expect(removeNil(array)).toEqual([]);
  });
});
