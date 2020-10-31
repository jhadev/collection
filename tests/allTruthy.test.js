const allTruthy = require('../samples/allTruthy.js')

test('all args are truthy', () => {
  expect(allTruthy(1, 2, 3, 4)).toBe(true);
});

test('not all args are truthy', () => {
  expect(allTruthy(1, 2, 3, null)).toBe(false);
});