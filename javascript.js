var quotes = [
	"I am free and that is why I am lost.", 
	"Thank you for the tragedy. I need it for my art", 
	"Deceive your other self. Deceive the world. That is what you must do to reach the Steins Gate. Good Luck. El Psy Congroo.",
	"To be positive at all times is to ignore all that is important, sacred and valuable. To be negative at all times is to be threatened by ridiculousness and instant discreditably.",
	"I am free and that is why I am lost.",
	"Sometimes you climb out of bed in the morning and you think, I'm not going to make it, but you laugh inside — remembering all the times you've felt that way",
	"When we were kid we think life is our sketch pad,as we grow realised This sketch pad has only one pen and the color is grey,so whoever you are how colorful you think your life is going to be,remember kids the grey-ness is coming to get you"
];

!function generateQuote() {
  var randomFact = Math.floor(Math.random() * quotes.length);
  document.getElementById('factDisplay').innerHTML = quotes[randomFact]
}();

function redColor() {
	document.getElementById("factDisplay").style.color = "white";
	document.getElementById("factbox").style.background = "red";
	document.getElementById("factbox").style.border = "thick solid black";
}
function greenColor() {
	document.getElementById("factDisplay").style.color = "white";
	document.getElementById("factbox").style.background = "green";
	document.getElementById("factbox").style.border = "thick solid white";
}
function blueColor() {
	document.getElementById("factDisplay").style.color = "white";
	document.getElementById("factbox").style.background = "blue";
	document.getElementById("factbox").style.border = "thick solid brown";
}
function yellowColor() {
	document.getElementById("factDisplay").style.color = "black";
	document.getElementById("factbox").style.background = "yellow";
	document.getElementById("factbox").style.border = "thick solid pink";
}


