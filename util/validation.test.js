import { validateDate } from "./validation";

test('Validating dateformat to YYYY-MM-DD should be equal true', () => {
    expect(validateDate("2022-08-22")).toBe(true);
  });