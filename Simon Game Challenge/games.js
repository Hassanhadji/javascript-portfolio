
var buttonColours = [ "red", "blue", "green", "yellow"];
console.log(buttonColours);
var gamePattern = [];
var userClickedPattern = [];

function animatePress(currentColour){

    $("#" + currentColour).addClass("pressed");
    setTimeout(function(){
        $("#" + currentColour).removeClass("pressed");

    }, 100);
}
var started = false;

var level = 0;



export function gameStarted(){

    $(document).on("keydown", function(){

        if(!started){
            started= true;
        $("h1").text("Level 0");
      nextSequence();

        }
        
      

 });
  
 

       
}
export function main(){
handler();
function waitForIt(){
    if(isPaused){

    }
}


}
var levelChecked = false;
var gameOver = false;

 export function handler(){


    $(".btn").on("click", function(){
       

        var userChosenColor = this.id;
        animatePress(userChosenColor);
        
        userClickedPattern.push(userChosenColor);
        console.log("User clicked " + userChosenColor);
        makeSound(userChosenColor);
        console.log("User sequence" + userClickedPattern);
        console.log("game patern  " + gamePattern);

        checkAnswer(userClickedPattern.length -1);
        
       
       

    
        
        


    });

   
}

function checkAnswer(currentLevel){


    
    
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if ( userClickedPattern.length === gamePattern.length){

            
            setTimeout(function(){
                nextSequence();
                


            }, 1000);
            userClickedPattern = [];



        }
        
        

        
    }
    else {
        console.log("wrong, stop the game");
        wrongSound();
        started = false;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
    $("h1").text("Game Over, Press Any Key to Restart");
        
    }
 


    


}


  function nextSequence(){

    $("h1").text("Level " + level);

    level++;
    
    var randomNumber = Math.floor(Math.random()*4);
    

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);


   
    animatePress(randomChosenColour);
    makeSound(randomChosenColour);




 
  

 

    

}

function makeSound(sound){

    switch(sound){
        case "blue":
            blueSound();
            break;
        case "red":
         redSound();
         break;
        case "green":
            greenSound();
            break;
        case "yellow":
            yellowSound();
            break;
       
        default:

    }
}


function blueSound(){
    var audio = new Audio("./sounds/blue.mp3");
    audio.play();
}

function greenSound(){

    var audio = new Audio("./sounds/green.mp3");
    audio.play();
}

function redSound(){
    var audio = new Audio("./sounds/red.mp3");
    audio.play();
}

function yellowSound(){
    var audio = new Audio("./sounds/yellow.mp3");
    audio.play();
}

function wrongSound(){
    var audio = new Audio("./sounds/wrong.mp3");
    audio.play();
}


//green sound 

//red sound 

//yellow sound 

// 
//queue to store levels sounds



//playing a a new random sound for the next level 