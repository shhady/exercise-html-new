const sum = require("./app.js");

test("sum of two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
