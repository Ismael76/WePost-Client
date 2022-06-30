const getPosts = require("../js/getData");

global.fetch = require("jest-fetch-mock");

describe("Testing get data", () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });

  afterEach(() => {
    // fetch.resetMocks();
  });

  //   test("Test to see if comments are fetched", async () => {
  //     await getPosts.getPosts();
  //     console.log(fetch);
  //     expect(fetch).toHaveBeenCalled();
  //   });

  test("Check to see if post container is created", async () => {
    const post = await getPosts();
    console.log(post);
    // expect(fetch).toHaveBeenCalled();
  });
});
