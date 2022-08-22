import { validateDate } from "./validation";

//Test case to test date validation is working properly or not
test('Validating dateformat to YYYY-MM-DD should be equal true', () => {
    expect(validateDate("2022-08-22")).toBe(true);
  });