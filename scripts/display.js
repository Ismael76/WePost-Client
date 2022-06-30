var css = document.getElementById("color");
var color1 = document.getElementById("color-1");
var color2 = document.getElementById("color-2");
var body = document.getElementsByTagName('body')[0];

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

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);