const fs = require("fs");
const path = require("path");
const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

global.fetch = require("jest-fetch-mock");

let postData;

describe("Testing post function", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    postData = require("../js/postData");
    fetch.resetMocks();
  });

  test("It makes a fetch call to the API backend where all posts are stored", () => {
    const fakeSubmitEvent = {
      // preventDefault: jest.fn(),
      target: {
        Description: { Description: "test" },
        URL: { URL: "test" },
      },
    };

    console.log(postData.addPost(fakeSubmitEvent));
    expect(fetch.mock.calls[0][1]).toHaveProperty("method", "POST");
    expect(fetch.mock.calls[0][1]).toHaveProperty(
      "body",
      JSON.stringify({ Description: "test", URL: "test" })
    );
  });
});
