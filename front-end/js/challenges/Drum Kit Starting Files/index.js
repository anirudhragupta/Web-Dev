var numOfDrums = (document.querySelectorAll(".drum").length);

//for button clicks
for(var i=0;i<numOfDrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        
        makeSound(this.innerHTML);
        //this.style.color = "white";
        /* var drumAudio = new Audio("sounds/tom-1.mp3");
        drumAudio.play();*/
    });
}

//to capture key strokes
document.addEventListener("keydown", function(eve){
    console.log(eve.key);
    makeSound(eve.key);
});

//making sound
function makeSound(keys){
    
    switch(keys){
        case "w":
            var drumAudio = new Audio("sounds/crash.mp3");
            drumAudio.play();
        break;
        case "a":
            var drumAudio = new Audio("sounds/kick-bass.mp3");
            drumAudio.play();

        break;
        case "s":
            var drumAudio = new Audio("sounds/snare.mp3");
            drumAudio.play();

        break;
        case "d":
            var drumAudio = new Audio("sounds/tom-1.mp3");
            drumAudio.play();

        break;
        case "j":
            var drumAudio = new Audio("sounds/tom-2.mp3");
            drumAudio.play();

        break;
        case "k":
            var drumAudio = new Audio("sounds/tom-3.mp3");
            drumAudio.play();

        break;
        case "l":
            var drumAudio = new Audio("sounds/tom-4.mp3");
            drumAudio.play();

        break;
        default:
            console.log(this.innerHTML);
    }
}
