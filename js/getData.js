const postList = document.querySelector(".post-list");

let commentContainer = document.createElement("div");
let comments = document.createElement("div");
let commentTitle = document.createElement("h1");
let commentForm = document.createElement("form");

const getPosts = async () => {
  const response = await fetch("https://rum-wepost.herokuapp.com/");
  const data = await response.json();

  const sortedData = data.sort((a, b) => b.PostID - a.PostID);

  for (let i = 0; i < data.length; i++) {
    let postID = data[i].PostID;
    console.log(postID);
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
    iconHeart.setAttribute("id", `${data[i].PostID}-h`);

    let iconEmojiOne = document.createElement("img");
    let emojiOneNum = document.createElement("span");
    iconEmojiOne.setAttribute("id", `${data[i].PostID}-t`);

    let iconEmojiTwo = document.createElement("img");
    let emojiTwoNum = document.createElement("span");
    iconEmojiTwo.setAttribute("id", `${data[i].PostID}-l`);

    let iconEmojiThree = document.createElement("img");
    let emojiThreeNum = document.createElement("span");
    iconEmojiThree.setAttribute("id", `${data[i].PostID}-s`);

    let commentInput = document.createElement("input");
    let commentBtn = document.createElement("input");

    commentInput.setAttribute("type", "text");
    commentInput.setAttribute("maxlength", 100);
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

        // Not sure where to put this
        commentForm.setAttribute("id", "c-form");
        /////////////////////////////

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

          fetch("https://rum-wepost.herokuapp.com/comments", options)
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

    // Reece working on the liking //////////////////////////////////

    // adding class to the like buttons

    iconHeart.addEventListener("click", (e) => {
      //Updates the number from just the front end
      let heartCount = parseInt(heartNum.textContent);
      heartCount++;
      heartNum.textContent = heartCount;
      // console.log(heartCount)

      let identify = e.target.id;
      let check = parseInt(identify.replace("-h", ""));

      if (check === data[i].PostID) {
        fetch(`https://rum-wepost.herokuapp.com/${data[i].PostID}`, {
          method: "PATCH",
          body: JSON.stringify({
            Likes: heartCount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((r) => r.json())
          .catch((err) => {
            console.log("Oh No!");
          });
      }
      // location.reload();
    });

    ////////////////emojisons/////////////////////////////

    iconEmojiOne.addEventListener("click", (e) => {
      //Updates the number from just the front end
      let emojiCount = parseInt(emojiOneNum.textContent);
      emojiCount++;
      emojiOneNum.textContent = emojiCount;
      // console.log(typeof heartCount)

      let identify = e.target.id;
      let check = parseInt(identify.replace("-t", ""));

      if (check === data[i].PostID) {
        fetch(`https://rum-wepost.herokuapp.com/emoji1/${data[i].PostID}`, {
          method: "PATCH",
          body: JSON.stringify({
            EmojiOne: emojiCount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((r) => r.json())
          .catch((err) => {
            console.log("Oh No!");
          });
      }
      // location.reload();
    });

    //////////////////////Emojitwo/////////////////////////////

    iconEmojiTwo.addEventListener("click", (e) => {
      //Updates the number from just the front end
      let emojiCount = parseInt(emojiTwoNum.textContent);
      emojiCount++;
      emojiTwoNum.textContent = emojiCount;
      // console.log(typeof heartCount)

      let identify = e.target.id;
      let check = parseInt(identify.replace("-l", ""));

      if (check === data[i].PostID) {
        fetch(`https://rum-wepost.herokuapp.com/emoji2/${data[i].PostID}`, {
          method: "PATCH",
          body: JSON.stringify({
            EmojiTwo: emojiCount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((r) => r.json())
          .catch((err) => {
            console.log("Oh No!");
          });
      }
      // location.reload();
    });

    //////////////////////Emojithree/////////////////////////////

    iconEmojiThree.addEventListener("click", (e) => {
      //Updates the number from just the front end
      let emojiCount = parseInt(emojiThreeNum.textContent);
      emojiCount++;
      emojiThreeNum.textContent = emojiCount;
      // console.log(typeof heartCount)

      let identify = e.target.id;
      let check = parseInt(identify.replace("-s", ""));

      if (check === data[i].PostID) {
        fetch(`https://rum-wepost.herokuapp.com/emoji3/${data[i].PostID}`, {
          method: "PATCH",
          body: JSON.stringify({
            EmojiThree: emojiCount,
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((r) => r.json())
          .catch((err) => {
            console.log("Oh No!");
          });
      }
      // location.reload();
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
    emojiOneNum.classList.add("emojiCounter");
    emojiTwoNum.classList.add("emojiCounter");
    emojiThreeNum.classList.add("emojiCounter");

    if (data[i].URL == null) {
      postDescription.textContent = data[i].Description;
      iconEmojiOne.setAttribute("src", "./images/like.gif");
      iconEmojiTwo.setAttribute("src", "./images/laugh.gif");
      iconEmojiThree.setAttribute("src", "./images/smile.gif");
      iconComment.setAttribute("src", "./images/comment.svg");
      iconHeart.setAttribute("src", "./images/heart.svg");
      imgProfile.setAttribute("src", "./images/user.svg");
      heartNum.textContent = data[i].Likes;

      name.textContent = "Anonymous";
      emojiOneNum.textContent = data[i].EmojiOne;
      emojiThreeNum.textContent = data[i].EmojiThree;
      emojiTwoNum.textContent = data[i].EmojiTwo;
      time.textContent = data[i].Time;
    } else {
      gif.setAttribute("src", data[i].URL);
      postDescription.textContent = data[i].Description;
      iconEmojiOne.setAttribute("src", "./images/like.gif");
      iconEmojiTwo.setAttribute("src", "./images/laugh.gif");
      iconEmojiThree.setAttribute("src", "./images/smile.gif");
      iconComment.setAttribute("src", "./images/comment.svg");
      iconHeart.setAttribute("src", "./images/heart.svg");
      imgProfile.setAttribute("src", "./images/user.svg");
      heartNum.textContent = data[i].Likes;

      name.textContent = "Anonymous";
      emojiOneNum.textContent = data[i].EmojiOne;
      emojiThreeNum.textContent = data[i].EmojiThree;
      emojiTwoNum.textContent = data[i].EmojiTwo;
      time.textContent = data[i].Time;
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
    divOne.append(iconHeart);
    divOne.append(heartNum);
    postReactionContainer.append(divTwo);
    divTwo.append(iconEmojiOne);
    divTwo.append(emojiOneNum);
    divTwo.append(iconEmojiTwo);
    divTwo.append(emojiTwoNum);
    divTwo.append(iconEmojiThree);
    divTwo.append(emojiThreeNum);
  }
};

const getComments = async (id) => {
  const response = await fetch("https://rum-wepost.herokuapp.com/comments");
  const commentData = await response.json();
  for (let i = 0; i < commentData.length; i++) {
    if (commentData[i].PostID === id) {
      let singleCommentContainer = document.createElement("div");
      let comment = document.createElement("p");
      let imgProfile = document.createElement("img");
      let commentTime = document.createElement("p");

      commentTime.classList.add("postTime");
      singleCommentContainer.classList.add("singleCommentContainer");
      comment.classList.add("comments");

      comment.textContent = commentData[i].Description;
      imgProfile.setAttribute("src", "./images/user.svg");
      commentTime.textContent = commentData[i].Time;

      commentContainer.append(singleCommentContainer);
      singleCommentContainer.append(imgProfile);
      singleCommentContainer.append(comment);
      singleCommentContainer.append(commentTime);
    }
  }
  location.reload();
};

setInterval(() => {
  getPosts;
}, 1000);
