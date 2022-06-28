const postBtn = document.getElementById("postbtn");
const postText = document.getElementById("text");

let url = "";

document.addEventListener("click", (e) => {
  url = e.target.getAttribute("src");
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    console.log(url);
  }
});

const addPost = (e) => {
  const postInfo = {
    Description: postText.value,
    URL: url,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(postInfo),
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("http://localhost:3500", options)
    .then((r) => {
      r.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

postBtn.addEventListener("click", addPost);
