var pantalla = document.getElementsByClassName("pantalla");
const teclas = document.getElementsByName("tecla");
const operadores = document.getElementsByName("operador");
const borrar = document.getElementsByName("borrar");
const igual = document.getElementsByName("igual");
const borrar1 = document.getElementsByName("borrar1");
const git = document.getElementById("GitHub");
const link = document.getElementById("Linkedin");
var actual, anterior, operacion;

actual = "";
anterior = "";
operacion = "";

teclas.forEach(function(tecla) {
    tecla.addEventListener("click", function() {
        actual += tecla.innerText;
        pantalla[0].textContent = actual;
    });
});

borrar1.forEach(function(borrar1) 
{
    borrar1.addEventListener("click", function() 
    {
        pantalla[0].textContent = pantalla[0].textContent.substring( 0 , pantalla[0].textContent.length - 1);
    });
});

borrar.forEach(function(borrar) {
    borrar.addEventListener("click", function() {
        pantalla[0].textContent = "";
        actual = "";
        anterior = "";
        operacion = "";
    });
});

operadores.forEach(function(operador) {
    operador.addEventListener("click", function() 
    {
        anterior = actual;
        actual = "";
        operacion = operador.innerText;
    });
});

igual.forEach(function(igual) 
{
    igual.addEventListener("click", function() 
    {
        actual = pantalla[0].textContent;
        anterior = parseFloat(anterior);
        actual = parseFloat(actual);
        switch(operacion)
        {
            case "+":
                     pantalla[0].textContent = "" + (anterior + actual);
                     break;
            case "-":
                     pantalla[0].textContent = "" + (anterior - actual);
                     break;
            case "*":
                     pantalla[0].textContent = "" + (actual * anterior);
                     break;
            case "/":
                     pantalla[0].textContent = "" + (anterior / actual);
                     break;
            case "^":
                     pantalla[0].textContent = "" + potencia(anterior,actual);
                     break;
            case "!":
                     pantalla[0].textContent = "" + factorial(anterior);
                     break;                      
        }

    });
});

function potencia(a,b)
         {
             var resultado = a;
			 
             for(i=1;i < b; i++)
             {
                 resultado = resultado * a;
             }
			 if(b == 0) resultado = 1;
             return resultado
         }
function factorial(a)
         {
             var resultado = 1;
             for(i=1; i <= a; i++)
             {
                 resultado = resultado * i;
             }
             return resultado
         }
