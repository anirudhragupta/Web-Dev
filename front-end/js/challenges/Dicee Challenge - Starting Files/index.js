var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);
function dicePick(n){
    if(n===1){
        return "dice1.png";
    }else if(n===2){
        return "dice2.png";
    }else if(n===3){
        return "dice3.png";
    }else if(n===4){
        return "dice4.png";
    }else if(n===5){
        return "dice5.png";
    }else{
        return "dice6.png";
    }
}

var pic1 = "images/" + dicePick(randomNumber1);
var pic2 = "images/" + dicePick(randomNumber2);
document.querySelector(".img1").setAttribute("src", pic1);
document.querySelector(".img2").setAttribute("src", pic2);



if(randomNumber1 > randomNumber2){
    document.querySelector("h1").classList.add("p1");
    document.querySelector("h1").textContent="Player 1 won! 🏁";
}else if(randomNumber1 === randomNumber2){
    document.querySelector("h1").classList.add("tie");
    document.querySelector("h1").textContent="TIED!";
}else{
    document.querySelector("h1").classList.add("p2");
    document.querySelector("h1").textContent="Player 2 won! 🏁";
}