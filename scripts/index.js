/**
 * Jorge Ordiz Pérez
 * github: 
 */

//Con la siguiente línea hacemos la llamada a iniciar sesión

//window.addEventListener("load", iniciarSesion)

//declaramos las variables que se van a utilizar a lo largo del todo el proyecto

let saldo = 1000
let PIN_CORRECTO = "1234"
let intentosRestantes = 3

// Enlazamos los botones
const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const transferirBtn = document.getElementById("transferir");
const salirBtn = document.getElementById("salir");
const saldoTemplate = document.getElementById("saldo");
const cambiarContraseniaBtn= document.getElementById("cambiar");

//Añadimos la opción click a los botones
depositarBtn.addEventListener("click", depositar);
retirarBtn.addEventListener("click", retirar);
transferirBtn.addEventListener("click", transferir);
cambiarContraseniaBtn.addEventListener("click", cambiar);

salirBtn.addEventListener("click", () => {
  alert("Gracias por utilizar el cajero. ¡Hasta luego!");
  window.location.replace("/tamplates/adios.html");
});

 // Función para actualizar el saldo del usuario/a
 function actualizarSaldoTemplate() {
    saldoTemplate.innerText = `${saldo} €`
  }

// esta función se utilizará para depositar

function depositar() {
    const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
    if (isNaN(deposito) || deposito <= 0) {
      alert("Cantidad inválida. Intente de nuevo.");
    } else {
      saldo += deposito;
      alert(`Se han depositado ${deposito.toFixed(2)} €`);
      actualizarSaldoTemplate()
    }
  }
  
  // Esta función se utiliza para retirar saldo
  function retirar() {
    const retira = parseFloat(prompt("Ingrese la cantidad a retirar:"));
    if (isNaN(retira) || retira <= 0 || retira > saldo) {
      alert("Cantidad inválida o insuficiente. Intentelo de nuevo.");
    } else {
      saldo -= retira;
      alert(`Ha retirado un total de ${retira.toFixed(2)} €`);
      actualizarSaldoTemplate()
    }
  }