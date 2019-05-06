/*var colors = [
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)"
];*/

var colors = generateRandomColors(6);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById('color-display');
var messageDisplay = document.getElementById('message');
var firstOne = document.querySelector("h1");
var resetButton = document.getElementById("reset");

resetButton.addEventListener('click', function() {
	
	colors = generateRandomColors(6);
	
	pickedColor = pickColor();
	
	firstOne.style.backgroundColor = "#232323";
	
	colorDisplay.textContent = pickedColor;
	
	resetButton.textContent = "New Colors";
	
	for(var i = 0; i < squares.length; i++){
	
		squares[i].style.backgroundColor = colors[i];
		
	}
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	
	squares[i].style.backgroundColor = colors[i];
	
	//click listeners	
	squares[i].addEventListener('click', function(){
		
		var clickedColor = this.style.backgroundColor;
		
		if(clickedColor === pickedColor){
			
			messageDisplay.textContent = "Correct";
			
			changeColors(pickedColor);
			
			resetButton.textContent = "Play Again";
			
		}else{
			
			this.style.backgroundColor = "#232323";
			
			messageDisplay.textContent = "You Guessed Wrong!!!!";
			
		}
	});
}

function changeColors(color){
	
	for(var i = 0; i < squares.length; i++){

		squares[i].style.backgroundColor = color;

		firstOne.style.backgroundColor = color;
		}
}

function pickColor(){
	
	var random = Math.floor(Math.random() * colors.length);
	
	return colors[random];
	
	console.log(colors[random]);

}

function generateRandomColors(num){
	arr = [];
	
	//repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
		
		console.log(randomColor());
	}
	return arr;
}
	
function randomColor(){
	
	var r = Math.floor(Math.random() * 256);
	
	var g = Math.floor(Math.random() * 256);
	
	var b = Math.floor(Math.random() * 256);
	
	return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}	