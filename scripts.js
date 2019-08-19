var football = document.getElementById("football-photo");
var playstation = document.getElementById("playstation-photo");
var programming = document.getElementById("programming-photo");

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