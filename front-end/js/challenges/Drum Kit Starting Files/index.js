var numOfDrums = (document.querySelectorAll(".drum").length);

for( var i=0;i<=numOfDrums;i++){
    document.querySelectorAll("button")[i].addEventListener("click",clicked);
}

function clicked(){
    alert("I got clicked");
}


