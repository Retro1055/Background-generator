var css=document.querySelector("h3");
var color1=document.querySelector(".color1");
var color2=document.querySelector(".color2");
var body = document.querySelector("body");
console.log(body);
const setgradient=() -> {
	body.style.background = "linear-gradient(to right, "+
	color1.value+","+
	color2.value+")";
	css.textContent = "the color on gradient are "
	 + color1.value +
	 " and " +color2.value;
}

color1.addEventListener("input",setgradient)
color2.addEventListener("input",setgradient)