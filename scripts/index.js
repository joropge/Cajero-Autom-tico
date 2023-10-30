/**
 * Jorge Ordiz Pérez
 * github:
 */

//Con la siguiente línea hacemos la llamada a iniciar sesión

window.addEventListener("load", iniciarSesion);

//declaramos las variables que se van a utilizar a lo largo del todo el proyecto

let saldo = 1000;
let PIN_CORRECTO = "1234";
let intentosRestantes = 3;

// Enlazamos los botones
const depositarBtn = document.getElementById("depositar");
const retirarBtn = document.getElementById("retirar");
const transferirBtn = document.getElementById("transferir");
const salirBtn = document.getElementById("salir");
const saldoTemplate = document.getElementById("saldo");
const cambiarContraseniaBtn = document.getElementById("cambiar");

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
  saldoTemplate.innerText = `${saldo} €`;
}

// esta función se utilizará para depositar
function depositar() {
  const deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
  if (isNaN(deposito) || deposito <= 0) {
    alert("Cantidad inválida. Intente de nuevo.");
  } else {
    saldo += deposito;
    alert(`Se han depositado ${deposito.toFixed(2)} €`);
    actualizarSaldoTemplate();
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
    actualizarSaldoTemplate();
  }
}

// Función para transferir saldo
function transferir() {
  const monto = parseFloat(prompt("Ingrese la cantidad a transferir:"));
  if (isNaN(monto) || monto <= 0 || monto > saldo) {
    alert("Cantidad inválida o insuficiente. Intente de nuevo.");
  } else {
    const cuentaDestino = prompt("Ingrese el número de cuenta de destino:");
    if (!validarIBAN(cuentaDestino)) {
      alert(`La cuenta ${cuentaDestino} no es una cuenta bancaria válida`);
      return;
    }
    alert(
      `Se han transferido ${monto.toFixed(2)} € a la cuenta ${cuentaDestino}.`
    );
    saldo -= monto;
    actualizarSaldoTemplate();
  }
}

// Función para iniciar sesión
function iniciarSesion() {
  let pin = prompt("Ingrese su PIN:");
  while (pin !== PIN_CORRECTO && intentosRestantes > 1) {
    intentosRestantes--;
    alert(`PIN incorrecto. Le quedan ${intentosRestantes} intentos.`);
    pin = prompt("Ingrese su PIN:");
  }

  if (pin === PIN_CORRECTO) {
    alert("Inicio de sesión exitoso.");
    actualizarSaldoTemplate();
  } else {
    alert("PIN incorrecto. El cajero se ha bloqueado.");
    window.location.replace("/tamplates/Block.html");
  }
}

//Esta función nos permite cambiar la contraseña
function cambiar() {
  pin = prompt("Escriba la contraseña numérica");
  if (pin == PIN_CORRECTO) {
    let cambioContrasenia = prompt("Escriba la nueva contraseña");
        PIN_CORRECTO = cambioContrasenia;
        alert(
          `ha cambiado la contraseña correctamente, esta es: ${cambioContrasenia}`
        );
  } else {
    alert("El PIN no es el correcto intentelo de nuevo");
  }
}

// Función para validar que el IBAN es correcto
function validarIBAN(iban) {
  var IBAN = /^(ES\d{22})$/;
  return IBAN.test(iban);
}
