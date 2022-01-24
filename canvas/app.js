// obtener elementos del html//
var texto = document.getElementById("cajaDeTexto");
var botoncito= document.getElementById("boton");
botoncito.addEventListener("click", dibujoPorClick) //evento//

var d = document.getElementById("dibujo");
var lienzo = d.getContext("2d");
var ancho = d.width; 

//funcion de dibujo lineas (reusable)// 
function dibujarLinea (color, xInicial, yInicial, xFinal, yFinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujoPorClick () {
    var lineas= parseInt(texto.value);
    var l= 0; 
    var espacio = ancho/lineas;

    while(l<lineas) {
        xi= l * espacio;
        yf= (l+1)* espacio;
        dibujarLinea("pink",xi, 0, 300,yf); 
        console.log("linea"+ l);
        console.log(espacio);
        l++; 
    }
}
