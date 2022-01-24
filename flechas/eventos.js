var teclas= {
    UP: 38,
    DOWN: 40, 
    LEFT: 37, 
    RIGHT:39
};

document.addEventListener("keyup", dibujarConUnteclado);
var cuadrito = document.getElementById("areaDeDibujo");
var papel= cuadrito.getContext("2d");
var x=150;
var y= 150;


function dibujarLinea (color, xInicial, yInicial, xFinal, yFinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color; 
    lienzo.lineWidth= 3; 
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
}


function dibujarConUnteclado(evento){
    var colorcito = "blue";
    var motion= 10;
    switch(evento.keyCode){
        case teclas.DOWN: 
            dibujarLinea(colorcito, x, y, x, y+motion, papel);
            y= y+motion;
        break; 
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y-motion, papel);
            y= y-motion;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x+motion, y, papel);
            x= x+motion;
            break;
        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x-motion, y, papel);
            x= x-motion;
            break; 
        default: 
            console.log("otra tecla"); 
            break; 
    }
}

