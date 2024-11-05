var num1 = prompt("Ingrese el num 1");
var num2 = prompt("Ingrese el num 2");

var resta = num1 - num2;

if (resta > 0) {
    console.log("Es mayor a 0");
    let imparpar = resta % 2;

    if (imparpar == 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }
} else {
    console.log("Es menor o igual a 0");
}
