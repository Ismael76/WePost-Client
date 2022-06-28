const heart = document.querySelector(".heart");
let isLiked = false;

heart.addEventListener("click", (e) => {
  if (isLiked == false) {
    heart.style.fill = "red";
    isLiked = true;
  } else if (isLiked == true) {
    heart.style.fill = "white";
    isLiked = false;
  }
});
