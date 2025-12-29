

const buttons = document.querySelectorAll(".drum");



for( let i = 0; i < buttons.length; i++){
    

    buttons[i].addEventListener("click", function(){

var buttonInnerHtml = this.innerHTML;
makeSound(buttonInnerHtml);

this.style.color = "white";

  setTimeout(() => {
    this.style.color = "#DA0463"; // drum color
  }, 1000);

    });

}
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);


    
});

function buttonAnimation(currentKey){
    const button = document.querySelector("." + currentKey);
    if(button){

    
    button.style.color = "white";

  setTimeout(() => {
    button.style.color = "#DA0463"; // drum color
  }, 1000); 
}
}

function makeSound(key){
    

switch(key){
case "w":
    crachSound();
    break;


case "a":
     kickSound();
       break;

case "s":
    tom1Sound();
      break;
case "d":
    tom2Sound();
      break;
case "j":
    tom3Sound();
      break;
case "k":
    tom4Sound();
      break;
case "l":
    crachSound();
      break;
default:

    }

    
}








/*
    if (buttons[i].classList.contains("w")){
        buttons[i].addEventListener("click",crachSound());
    }
    if (buttons[i].classList.contains("a")){
        buttons[i].addEventListener("click", kickSound());
    }
     if ( buttons[i].classList.contains("s")){
        buttons[i].addEventListener("click",tom1Sound() );
    }

    if ( buttons[i].classList.contains("d")){
        buttons[i].addEventListener("click",tom2Sound() );
    }
     if ( buttons[i].classList.contains("j")){
        buttons[i].addEventListener("click",tom3Sound());
    }
     if ( buttons[i].classList.contains("k")){
        buttons[i].addEventListener("click",tom4Sound() );
    }
     if ( buttons[i].classList.contains("l")){
        buttons[i].addEventListener("click",crachSound() );
    }
        */


function changeBackgroundColor(){
   this.style.color = "white";
}
function crachSound(){
var audio = new Audio("sounds/crash.mp3");
audio.play();
}
function kickSound(){
var audio = new Audio("sounds/kick-bass.mp3");
audio.play();
}
function snareSound(){
var audio = new Audio("sounds/snare.mp3");
audio.play();
}
function tom1Sound(){
var audio = new Audio("sounds/tom-1.mp3");
audio.play();
}
function tom2Sound(){
var audio = new Audio("sounds/tom-2.mp3");
audio.play();
}

function tom3Sound(){
var audio = new Audio("sounds/tom-3.mp3");
audio.play();
}

function tom4Sound(){
var audio = new Audio("sounds/tom-4.mp3");
audio.play();
}