var nombre = "Peter";
var numero = 150;
var booleano = true;
var hoy = new Date();
console.log(hoy);
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;
var spiderman = {
    nombre: "Peter",
    edad: 20
};
spiderman = {
    nombre: "Juan",
    //poder: "fuerza",
    edad: 30
};
function getNumber(n) {
    return 100 + n;
}
var apellido = "Perez";
var edad = 32;
//let texto = "Hola, "+nombre+" "+apellido+" ("+edad+")";
var texto = "Hola, " + nombre + " " + apellido + " \n            (" + edad + ")";
var texto2 = " " + (1 + 2) + " ";
var texto3 = " " + getNumber(10);
console.log(texto);
console.log(texto2);
console.log(texto3);
function drink(quien, objeto, momento) {
    if (objeto === void 0) { objeto = "Refresco"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " bebio " + objeto + " en " + momento;
    }
    else {
        mensaje = quien + " bebio " + objeto;
    }
    console.log(mensaje);
}
drink("Homero");
drink("Homero", "Cerveza");
drink("Homero", "Cerveza", "la tarde");
var myFunction = function (a) {
    return a;
};
var myFunctionF = function (a) { return a; };
console.log(myFunction("F1"));
console.log(myFunctionF("FF1"));
var myFunction2 = function (a, b) {
    return a + b;
};
var myFunctionF2 = function (a, b) { return a + b; };
console.log(myFunction2(10, 20));
console.log(myFunctionF2(10, 30));
var myFunction3 = function (a) {
    var upper = a.toUpperCase();
    upper = "Converted " + upper;
    return upper;
};
var myFunctionF3 = function (a) {
    var upper = a.toUpperCase();
    upper = "Converted " + upper;
    return upper;
};
console.log(myFunction3("f3"));
console.log(myFunctionF3("ff3"));
var hulk = {
    nombre: "Hulk",
    smash: function (objeto) {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash " + objeto); }, 1500);
    }
};
hulk.smash("Car");
var avenger = {
    nombre: "Steve",
    clave: "Capitan",
    poder: "Droga"
};
var a_nombre = avenger.nombre, a_clave = avenger.clave, a_poder = avenger.poder;
//let a_nombre = avenger.nombre;
//let a_clave = avenger.clave;
//let a_poder = avenger.poder;
console.log(a_nombre, a_clave, a_poder);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
var ironman2 = avengers[2];
console.log(ironman2);
