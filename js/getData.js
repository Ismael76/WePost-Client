const postList = document.querySelector(".post-list");

const getPosts = async () => {
  const response = await fetch("http://localhost:3500");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let postContainer = document.createElement("section");
    let postReactionContainer = document.createElement("div");
    let postUserContainer = document.createElement("div");
    let divOne = document.createElement("div");
    let divTwo = document.createElement("div");
    let name = document.createElement("p");
    let time = document.createElement("p");
    let postDescription = document.createElement("p");
    let imgProfile = document.createElement("img");
    let iconComment = document.createElement("img");

    let heartNum = document.createElement("span");
    let iconHeart = document.createElement("img");

    let iconEmojiOne = document.createElement("img");
    let emojiOneNum = document.createElement("span");

    let iconEmojiTwo = document.createElement("img");
    let emojiTwoNum = document.createElement("span");

    let iconEmojiThree = document.createElement("img");
    let emojiThreeNum = document.createElement("span");

    let commentContainer = document.createElement("div");
    let commentInput = document.createElement("input");
    let commentBtn = document.createElement("input");
    commentInput.setAttribute("type", "text");
    commentBtn.setAttribute("type", "submit");
    commentBtn.setAttribute("value", "Comment");
    let gif = document.createElement("img");
    let opened = false;

    iconComment.addEventListener("click", () => {
      if (opened == false) {
        commentContainer.classList.add("commentContainer");
        commentBtn.classList.add("commentBtn");
        commentInput.classList.add("commentInput");
        postContainer.append(commentContainer);
        commentContainer.append(commentInput);
        commentContainer.append(commentBtn);

        commentBtn.addEventListener("click", (e) => {
          e.preventDefault();

          const commentInfo = {
            Description: commentInput.value,
          };
          const options = {
            method: "POST",
            body: JSON.stringify(commentInfo),
            headers: {
              "Content-Type": "application/json",
            },
          };
          fetch("http://localhost:3500/comments", options)
            .then((r) => r.json())
            .catch((err) => {
              console.log(err);
            });
        });

        opened = true;
      } else {
        postContainer.removeChild(commentContainer);
        opened = false;
      }
    });

    postContainer.classList.add("postContainer");
    postReactionContainer.classList.add("postReactionContainer");
    postUserContainer.classList.add("postUserContainer");

    time.classList.add("postTime");

    postDescription.classList.add("postDescription");
    iconComment.classList.add("comment", "hover");
    iconEmojiOne.classList.add("emoji", "hover");
    iconEmojiTwo.classList.add("emoji", "hover");
    iconEmojiThree.classList.add("emoji", "hover");
    gif.classList.add("gif");
    iconHeart.classList.add("heart", "hover");

    if (data[i].URL == null) {
      postDescription.textContent = data[i].Description;
      iconEmojiOne.setAttribute("src", "./images/confused.svg");
      iconEmojiTwo.setAttribute("src", "./images/laughing.svg");
      iconEmojiThree.setAttribute("src", "./images/happy.svg");
      iconComment.setAttribute("src", "./images/comment.svg");
      iconHeart.setAttribute("src", "./images/heart.svg");
      imgProfile.setAttribute("src", "./images/user.svg");
      heartNum.textContent = 0;
      name.textContent = "Anonymous";
      emojiOneNum.textContent = 0;
      emojiThreeNum.textContent = 0;
      emojiTwoNum.textContent = 0;
    } else {
      gif.setAttribute("src", data[i].URL);
      postDescription.textContent = data[i].Description;
      iconEmojiOne.setAttribute("src", "./images/confused.svg");
      iconEmojiTwo.setAttribute("src", "./images/laughing.svg");
      iconEmojiThree.setAttribute("src", "./images/happy.svg");
      iconComment.setAttribute("src", "./images/comment.svg");
      iconHeart.setAttribute("src", "./images/heart.svg");
      imgProfile.setAttribute("src", "./images/user.svg");
      heartNum.textContent = 0;
      name.textContent = "Anonymous";
      emojiOneNum.textContent = 0;
      emojiThreeNum.textContent = 0;
      emojiTwoNum.textContent = 0;
    }

    postList.append(postContainer);
    postContainer.append(postUserContainer);
    postContainer.append(postDescription);
    postContainer.append(gif);
    postContainer.append(postReactionContainer);
    postUserContainer.append(imgProfile);
    postUserContainer.append(name);
    postUserContainer.append(time);

    postReactionContainer.append(divOne);
    divOne.append(iconComment);
    divOne.append(heartNum);
    divOne.append(iconHeart);
    postReactionContainer.append(divTwo);
    divTwo.append(emojiOneNum);
    divTwo.append(iconEmojiOne);
    divTwo.append(emojiTwoNum);
    divTwo.append(iconEmojiTwo);
    divTwo.append(emojiThreeNum);
    divTwo.append(iconEmojiThree);
  }
};

getPosts();
