var blendAmount = 70;
var delay = -10;
var windowWidth = window.innerWidth;
var bg = document.getElementById("bg");

document.onmousemove = function(e){
	mouseX = Math.round(e.pageY / windowWidth * 100 - delay);
	
	row1 = mouseX - blendAmount;
	row2 = mouseX + blendAmount;
	
	bg.style.background = "linear-gradient(to bottom, #156785 "+ row1 +"%, #fad0c4 "+ row2 +"%)";
}