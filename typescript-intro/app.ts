let nombre:string = "Peter";
let numero:number = 150;
let booleano:boolean = true;

let hoy:Date = new Date();

console.log(hoy);

let cualquiera:any;

cualquiera =  nombre;
cualquiera = numero;
cualquiera = booleano;
cualquiera = hoy;

let spiderman = {
    nombre: "Peter",
    edad : 20
}

spiderman = {
    nombre: "Juan",
    //poder: "fuerza",
    edad: 30
}

function getNumber(n:number){
    return 100+n;
}

let apellido:string = "Perez";
let edad:number = 32;

//let texto = "Hola, "+nombre+" "+apellido+" ("+edad+")";
let texto = `Hola, ${nombre} ${apellido} 
            (${edad})`;

let texto2 = ` ${1+2} `;
let texto3 = ` ${ getNumber(10) }`

console.log(texto);
console.log(texto2);
console.log(texto3);


function drink (quien:string, objeto:string="Refresco", momento?:string){
    let mensaje;
    if(momento){
        mensaje = `${quien} bebio ${objeto} en ${momento}`;
    }
    else{
        mensaje = `${quien} bebio ${objeto}`;
    }
    console.log(mensaje);
}

drink("Homero");
drink("Homero", "Cerveza");
drink("Homero", "Cerveza", "la tarde");


let myFunction = function (a:string) {
    return a;
}

let myFunctionF = (a:string) => a;

console.log(myFunction("F1"));
console.log(myFunctionF("FF1"));

let myFunction2 = function (a:number, b:number) {
    return a+b;
}

let myFunctionF2 = (a:number,b:number) => a+b;

console.log(myFunction2(10,20));
console.log(myFunctionF2(10,30));


let myFunction3 = function (a:string) {
    let upper = a.toUpperCase();
    upper = "Converted "+ upper;
    return upper;
}

let myFunctionF3 = (a:string) => {
    let upper = a.toUpperCase();
    upper = "Converted "+ upper;
    return upper;
}

console.log(myFunction3("f3"));
console.log(myFunctionF3("ff3"));

let hulk = {
    nombre: "Hulk",
    smash(objeto:string){
        setTimeout(() => console.log(this.nombre +" smash "+ objeto), 1500);
    }
}

hulk.smash("Car");

let avenger = {
    nombre: "Steve",
    clave: "Capitan",
    poder: "Droga"
}

let {nombre:a_nombre, clave:a_clave, poder:a_poder} = avenger;

//let a_nombre = avenger.nombre;
//let a_clave = avenger.clave;
//let a_poder = avenger.poder;

console.log(a_nombre, a_clave, a_poder);


let avengers:string[] = ["Thor","Steve","Tony"];
let [thor, capi, ironman] = avengers;

console.log(thor,capi,ironman);

let [,,ironman2] = avengers;
console.log(ironman2);