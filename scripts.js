var football = document.getElementById("football-photo");
var playstation = document.getElementById("playstation-photo");
var programming = document.getElementById("programming-photo");

alert("Hello, I recommend you to interact with the different elements of my web page, try to place the pointer on top of the elements and even some will react if you click them.");

football.onclick = function(){
  var src = football.getAttribute("src");
  if (src === "fotos/football.png"){
    football.setAttribute("src", "fotos/real-madrid.png");
  }
  else{
    football.setAttribute("src", "fotos/football.png");
  }
};

playstation.onclick = function(){
  var src = playstation.getAttribute("src");
  if(src === "fotos/playstation.png"){
    playstation.setAttribute("src", "fotos/fifa.png");
  }
  else{
    playstation.setAttribute("src", "fotos/playstation.png");
  }
};

programming.onclick = function(){
  var src = programming.getAttribute("src");
  if(src === "fotos/programming.png"){
    programming.setAttribute("src", "fotos/laptop.png");
  }
  else{
    programming.setAttribute("src", "fotos/programming.png");
  }
};