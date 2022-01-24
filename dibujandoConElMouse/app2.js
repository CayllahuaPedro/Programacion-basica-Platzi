// declarar variables globales//
var colorcito= " red"; 
// obtner objetos del html//
var cuadrito = document.getElementById("areaDeDibujo");
var papel= cuadrito.getContext("2d");
cuadrito.addEventListener("mousedown", dibujarMouse); //evento mousedown
cuadrito.addEventListener("mouseup", terminarDibujo)


// funcion que se activa por el evento//
function dibujarMouse (evento)
{
    var Coor_X= evento.offsetX;
    var Coor_Y= evento.offsetY; 
    xFinal= Coor_X + 1;
    yFinal= Coor_Y + 1;
    dibujarLinea(colorcito, Coor_X, Coor_Y, xFinal, yFinal, papel);
} 

function terminarDibujo (evento2){
    var Coor_X= evento2.offsetX;
    var Coor_Y= evento2.offsetY; 
    dibujarLinea(colorcito, Coor_X, Coor_Y, xFinal, yFinal, papel);
}
//funcion para dibujar lineas//
function dibujarLinea (color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.lineWidth= 3; 
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}
 //
 //offsetX
 //offsetY
 //