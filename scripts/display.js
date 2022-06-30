var css = document.getElementById("color");
var color1 = document.getElementById("color-1");
var color2 = document.getElementById("color-2");

var body = document.getElementsByTagName('header')[0];
let toggle = document.getElementById('light');


function setGradient() {
    console.log(body);
	body.style.background = 
	"linear-gradient(to right, "
	 + color1.value 
	 + ", " 
	 + color2.value 
	 + ")";
css.textContent = body.style.background + ";";
}


// const toggleDarkMode = () => {
//     let section = document.getElementsByClassName('main')[0];
//     let bar1 = document.getElementsByClassName('show')[0].getElementsByTagName('span')[0];
//     let bar2 = document.getElementsByClassName('show')[0].getElementsByTagName('span')[1];
//     let bar3 = document.getElementsByClassName('show')[0].getElementsByTagName('span')[2];
//     let container = document.getElementsByClassName('container')[0];
//     let btn1 = document.getElementsByClassName('btn-green')[0];
//     let btn2 = document.getElementsByClassName('btn-green')[1];
//     let cContainer = document.getElementsByClassName('commentContainer')[0];
//     let comment = document.getElementsByClassName('comments')[0];

    // console.log(menu);
    // menu.style.color = '#000000';
    // bar1.style.background = '#000000';
    // bar2.style.background = '#000000';
    // bar3.style.background = '#000000';
    // container.style.color = '#000000';
    // btn1.style.background = '#000000';
    // btn2.style.background = '#000000';
    // cContainer.style.background = '#000000';
    // cContainer.style.color = '#ffffff';
    // comment.style.color = '#ffffff';
    // section.setAttribute('id', 'darkMode');
// }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
// toggle.addEventListener('click', toggleDarkMode);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

