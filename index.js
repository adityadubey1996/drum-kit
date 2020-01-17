
var numberOFdrums = document.querySelectorAll("button").length
for(var i=0;i<numberOFdrums;i++){

document.querySelectorAll("button")[i].addEventListener("click", function (){
	var drum = this.innerHTML

	makeSound(drum)
	buttonAnimation(drum)
})
}
// document.querySelectorAll("button").addEventListener("click", function (){
// 	console.log(this)})

// document.querySelector("button").addEventListener("click", function (){
// 	console.log(this)})

document.addEventListener("keypress", function(event){

	var keyboard = event.key
	
	makeSound(keyboard)
	buttonAnimation(keyboard)

})

function buttonAnimation(currentKey){
	var activebutton = document.querySelector("." + currentKey)

	activebutton.classList.add("pressed")

	setTimeout (function(){
		activebutton.classList.remove("pressed")
	}, 100)
}

function makeSound(keyboard){
	switch(keyboard) {
		case 'w':
		var audio = new Audio("sounds/crash.mp3")
	audio.play()
	break;
		case 'a':
		var audio = new Audio("sounds/kick-bass.mp3")
	audio.play()
	break;
		case 's':
		var audio = new Audio("sounds/snare.mp3")
	audio.play()
	break;
		case 'd':
		var audio = new Audio("sounds/tom-1.mp3")
	audio.play()
	break;
		case 'j':
		var audio = new Audio("sounds/tom-2.mp3")
	audio.play()
	break;
		case 'k':
		var audio = new Audio("sounds/tom-3.mp3")
	audio.play()
	break;
		case 'l':
		var audio = new Audio("sounds/tom-4.mp3")
	audio.play()
	break;
	}


}
function handleClick(){
	alert("clicked")
}

function audioDrum(i){
	var audio = new Audio("sounds/crash.mp3")
	audio.play()
}