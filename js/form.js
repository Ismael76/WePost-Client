let APIKEY = "HTs4Np5W3aVkPq3tIBbu4uK9AC8dwXJn";
let postText = document.getElementById("post");

document.addEventListener("DOMContentLoaded", init);
function init() {
  document.getElementById("btnSearch").addEventListener("click", (ev) => {
    ev.preventDefault();
    const heading = document.createElement("p");
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=`;
    let str = document.getElementById("search").value.trim();
    url = url.concat(str);

    for (let i = 0; i < 20; i++) {
      fetch(url)
        .then((response) => response.json())
        .then((content) => {
          //  data, pagination, meta
          let fig = document.createElement("figure");
          let img = document.createElement("img");
          img.src = content.data[i].images.downsized.url;
          img.alt = content.data[i].title;
          fig.appendChild(img);
          let out = document.querySelector(".out");
          out.insertAdjacentElement("afterbegin", fig);
          document.querySelector("#search").value = "";
        })
        .catch((err) => {
          console.error(err);
        });
    }
  });
}
