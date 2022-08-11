var pantalla = document.getElementsByClassName("pantalla");
const teclas = document.getElementsByName("tecla");
const operadores = document.getElementsByName("operador");
var operacion,actual,anterior;

operacion=""
actual=""
anterior=""

teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        pantalla[0].textContent += tecla.innerText;
    });
});

operador.forEach(function(operador) {
    operador.addEventListener("click", function() {
        operacion= operador.innerText;
    });
});
