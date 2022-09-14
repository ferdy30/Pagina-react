window.onload = function() {
    alert("FELIZ DIA DE LA INDEPENDENCIA")
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var my_gradient = ctx.createLinearGradient(0, 0, 0, 170);
my_gradient.addColorStop(0, "white");
my_gradient.addColorStop(1, "black");
ctx.fillStyle = my_gradient;
ctx.fillRect(10, 10, 150, 100);}