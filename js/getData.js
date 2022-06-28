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
    let iconEmojiOne = document.createElement("img");
    let iconEmojiTwo = document.createElement("img");
    let iconEmojiThree = document.createElement("img");
    let gif = document.createElement("img");

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

    if (data[i].URL == null) {
      postDescription.textContent = data[i].Description;
      iconEmojiOne.setAttribute("src", "./images/confused.svg");
      iconEmojiTwo.setAttribute("src", "./images/laughing.svg");
      iconEmojiThree.setAttribute("src", "./images/happy.svg");
      iconComment.setAttribute("src", "./images/comment.svg");
      imgProfile.setAttribute("src", "./images/user.svg");
      name.textContent = "Anonymous";
    } else {
      gif.setAttribute("src", data[i].URL);
      postDescription.textContent = data[i].Description;
      iconEmojiOne.setAttribute("src", "./images/confused.svg");
      iconEmojiTwo.setAttribute("src", "./images/laughing.svg");
      iconEmojiThree.setAttribute("src", "./images/happy.svg");
      iconComment.setAttribute("src", "./images/comment.svg");
      imgProfile.setAttribute("src", "./images/user.svg");
      name.textContent = "Anonymous";
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
    postReactionContainer.append(divTwo);
    divTwo.append(iconEmojiOne);
    divTwo.append(iconEmojiTwo);
    divTwo.append(iconEmojiThree);
  }
};

getPosts();
