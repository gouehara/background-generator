var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient(){
	var randomPic1 = "#000000".replace(/0/g, function(){
		return (~~(Math.random()*16)).toString(16);
	});
	var randomPic2 = "#000000".replace(/0/g, function(){
		return (~~(Math.random()*16)).toString(16);
	});
	body.style.background = 
	"linear-gradient(to right, " 
	+ randomPic1
	+ ", " 
	+ randomPic2 
	+ ")";

	css.textContent = body.style.background + ";";
}


color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
random.addEventListener("click", randomGradient);