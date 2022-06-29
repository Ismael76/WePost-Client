const postList = document.querySelector(".post-list");

let commentContainer = document.createElement("div");
let comments = document.createElement("div");
let commentTitle = document.createElement("h1");
let commentForm = document.createElement("form");

const getPosts = async () => {
  const response = await fetch("http://localhost:3500");
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let postID = data[i].PostID;
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

    let commentInput = document.createElement("input");
    let commentBtn = document.createElement("input");

    commentInput.setAttribute("type", "text");
    commentBtn.setAttribute("type", "submit");
    commentBtn.setAttribute("value", "Comment");
    commentBtn.setAttribute("id", `${data[i].PostID}`);
    let gif = document.createElement("img");
    let opened = false;

    iconComment.addEventListener("click", (e) => {
      commentContainer.remove();
      commentBtn.remove();
      commentInput.remove();
      if (opened == false) {
        const comments = Array.from(commentContainer.children);
        const formChildren = Array.from(commentForm.children);

        for (let i = 0; i < formChildren.length; i++) {
          formChildren[i].remove();
        }

        for (let i = 1; i < comments.length; i++) {
          comments[i].remove();
        }

        commentContainer.classList.add("commentContainer");
        commentBtn.classList.add("commentBtn");
        commentInput.classList.add("commentInput");
        commentTitle.classList.add("commentTitle");
        postContainer.append(commentContainer);
        commentContainer.append(commentForm);
        commentForm.append(commentInput);
        commentForm.append(commentBtn);
        commentTitle.textContent = "Comments";
        commentForm.append(commentTitle);
        commentBtn.addEventListener("click", (e) => {
          const commentInfo = {
            PostID: postID,
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
              console.log("Oh No!");
            });
        });
        getComments(data[i].PostID);
        opened = true;
      } else {
        commentContainer.remove();
        const comments = Array.from(commentContainer.children);
        for (let i = 1; i < comments.length; i++) {
          comments[i].remove();
        }
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

const getComments = async (id) => {
  const response = await fetch("http://localhost:3500/comments");
  const commentData = await response.json();
  for (let i = 0; i < commentData.length; i++) {
    if (commentData[i].PostID === id) {
      let singleCommentContainer = document.createElement("div");
      let comment = document.createElement("p");
      let imgProfile = document.createElement("img");

      singleCommentContainer.classList.add("singleCommentContainer");
      comment.classList.add("comments");

      comment.textContent = commentData[i].Description;
      imgProfile.setAttribute("src", "./images/user.svg");

      commentContainer.append(singleCommentContainer);
      singleCommentContainer.append(imgProfile);
      singleCommentContainer.append(comment);

      // commentContainer.append(comments);
      // comments.append(comment);
    }
  }
};

getPosts();
