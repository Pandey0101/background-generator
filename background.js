var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var gradient = document.getElementById("grad");


function mygenerator() {
    gradient.style.background = "linear-gradient(to right,"
    + color1.value+
    ", "
    +color2.value+
    ", "
    +color3.value+
    ")";
}
color1.addEventListener("input", mygenerator ); 

color2.addEventListener("input", mygenerator ) ;

color3.addEventListener("input", mygenerator);
  