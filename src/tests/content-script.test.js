const { getData } = require("../scripts/content-script")

global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ content: "Mocked Wikipedia Data" }),
    })
  );

beforeEach(() => {
  fetch.mockClear();
});

test("getData - Tests Fetch - True", async () => {

  const testingValue = "testingvalue";

  await getData(testingValue);

  // Expectations
  expect(global.fetch).toHaveBeenCalledWith(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${testingValue}`
  );

});

test("getData - Tests Fetch - False", async () => {

  const testingValue = "testingvalue";

  await getData(testingValue);

  // Expectations
  expect(global.fetch).not.toHaveBeenCalledWith(
    `https://en.wikipedia.org/api/rest_v1/page/summary/!${testingValue}`
  );

});

test("getData - Test Parameter - Null Value", async () => {

  const testingValue = null;

  await getData(testingValue);

  // Expectations
  expect(global.fetch).not.toHaveBeenCalled()

});

test("getData - Test Parameter - Undefined Value", async () => {

  const testingValue = undefined;

  await getData(testingValue);

  // Expectations
  expect(global.fetch).not.toHaveBeenCalled()

});