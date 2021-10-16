const index = require('./index.js');

test('demo function should add 2 numbers and return', () => {
  let result = index.demoFunctionAdd(1, 5);
  expect(result).toBe(6);
})
