var numOfDrums = (document.querySelectorAll(".drum").length);

for( var i=0;i<=numOfDrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        this.style.color = "white";

        // var drumAudio = new Audio("sounds/tom-1.mp3");
        // drumAudio.play();
    })
}

// function clicked(){
//     alert("I got clicked");
// }


