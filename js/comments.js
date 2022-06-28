// const postBox = document.getElementsByClassName("postContainer");
const postBox = document.querySelector("#postbox")
const comment = document.querySelector("#com")


comment.addEventListener("click", () => {
    postBox.style.height = "400px";
    const textbox = document.createElement("input")
    textbox.setAttribute("type", "text");
    const btn = document.createElement("button");
    btn.innerText = "Post";
    postBox.append(textbox);
    postBox.append(btn);
}, {once : true});

/*document.querySelectorAll(".postContainer").forEach(item => {
document.querySelectorAll(".comment").forEach(element => {
    element.addEventListener("click", () => {
        item.style.height = "400px";
        // var form = document.createElement("form");
        const textbox = document.createElement("input")
        textbox.setAttribute("type", "text");
        const btn = document.createElement("button");
        // s.setAttribute("type", "submit");
        // s.setAttribute("value", "Submit");
        item.append(textbox);
        item.append(btn);
    })
})
})*/
