const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");
const { init } = require("../js/form");

global.fetch = require("jest-fetch-mock");

describe("Testing form", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  test("Test to see if Giphy API is being called", () => {
    init();
    expect(fetch.mock.calls[0]).toMatch(
      /https:\/\/api.giphy.com\/v1\/gifs\/search\?api_key=HTs4Np5W3aVkPq3tIBbu4uK9AC8dwXJn&limit=30&q=/
    );
    expect(fetch).toHaveBeenCalled();
  });
});
