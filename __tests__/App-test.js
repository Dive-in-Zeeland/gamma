import { addNumbers } from '../src/misc/testers/addNumber';

test('add numbers', () => {
  expect(addNumbers(1, 2)).toEqual(3);
});
