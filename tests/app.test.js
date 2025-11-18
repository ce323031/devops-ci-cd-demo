const hello = require("../src/app");

test("returns correct message", () => {
  expect(hello()).toBe("Hello DevOps by Handika 🚀");
});
