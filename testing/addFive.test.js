const { default: TestRunner } = require('jest-circus');
const addFive = require('./addFive');

test('returns the number plus 5', () => {
  expect(addFive(5)).toBe(10);
});