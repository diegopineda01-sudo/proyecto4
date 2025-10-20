
let nombreValido = false;
let emailValido = false;
let contraseñaValida = false;
let confirmacionValida = false;
let checkboxMarcado = false;

let inputEleNom = document.getElementById("fullName")

let regexNombre = /^[a-zA-ZÀ-ÿ\s]{1,50}$/

inputEleNom.addEventListener("input", () => {
  let nombreCompleto = inputEleNom.value

  if (regexNombre.test(nombreCompleto)) {
    inputEleNom.style.borderColor = "#62e47c";
    nombreValido = true;
  } else {
    inputEleNom.style.borderColor = "red";
    nombreValido = false;
  }

  if (nombreCompleto === "") {
    inputEleNom.style.borderColor = "";
    nombreValido = false;
  }

  validarFormulario()
})

let inputEmail = document.getElementById("email")

let regexEmail = /^[\w\.-]+@[\w\.-]+\.\w{2,4}$/

inputEmail.addEventListener("input", () => {
  let nombreEmail = inputEmail.value

  if (regexEmail.test(nombreEmail)) {
    inputEmail.style.borderColor = "#62e47c"
    emailValido = true;
  } else {
    inputEmail.style.borderColor = "red"
    emailValido = false;
  }
  if (nombreEmail === "") {
    inputEmail.style.borderColor = "";
    emailValido = false;
  }

  validarFormulario()
})

let inputContraseña = document.getElementById("password")

let regexContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

inputContraseña.addEventListener("input", () => {
  let contraseña = inputContraseña.value

  if (regexContraseña.test(contraseña)) {
    inputContraseña.style.borderColor = "#62e47c"
    contraseñaValida = true
  } else {
    inputContraseña.style.borderColor = "red"
    contraseñaValida = false
  }

  if (contraseña === "") {
    inputContraseña.style.borderColor = "";
    contraseñaValida = false
  }
  validarFormulario()
})

let inputreContraseña = document.getElementById("re-Password")

let regexreContraseña = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/

inputreContraseña.addEventListener("input", () => {
  let recontraseña = inputreContraseña.value

  let contraseña = inputContraseña.value

  if (regexContraseña.test(contraseña) && recontraseña == contraseña) {
    inputreContraseña.style.borderColor = "#62e47c"
    confirmacionValida = true;
  } else {
    inputreContraseña.style.borderColor = "red"
    confirmacionValida = false;
  }

  if (recontraseña === "") {
    inputreContraseña.style.borderColor = "";
    confirmacionValida = false;
  }

  validarFormulario()
})

const inputCheckbox = document.getElementById("rules");

inputCheckbox.addEventListener("change", () => {
  checkboxMarcado = inputCheckbox.checked;
  validarFormulario();
});

function validarFormulario() {
  const boton = document.getElementById("submitBtn");
  if (nombreValido && emailValido && contraseñaValida && confirmacionValida && checkboxMarcado) {
    boton.disabled = false;
    boton.style.backgroundColor = "#1886FB"
  } else {
    boton.disabled = true;
  }
}

const flagspath = {
  ar: 'img/svg/ar.svg',
  pe: 'img/svg/pe.svg',
  mx: 'img/svg/mx.svg',
  sv: 'img/svg/sv.svg',
  cl: 'img/svg/cl.svg',
  uy: 'img/svg/uy.svg',
  py: 'img/svg/py.svg',
  pa: 'img/svg/pa.svg',
  ve: 'img/svg/ve.svg',
  es: 'img/svg/es.svg',
  ni: 'img/svg/ni.svg',
  cr: 'img/svg/cr.svg',
  bo: 'img/svg/bo.svg',
  pr: 'img/svg/pr.svg',
  us: 'img/svg/us.svg',
  hn: 'img/svg/hn.svg',
  ec: 'img/svg/ec.svg',
  br: 'img/svg/br.svg',
  do: 'img/svg/do.svg',
  gt: 'img/svg/gt.svg',
  co: 'img/svg/co.svg',
  ad: 'img/svg/ad.svg',
  ae: 'img/svg/ae.svg',
  af: 'img/svg/af.svg'
};

const selectCountry = document.getElementById("country");

let divSelect = document.querySelector(".selectEstilo")

selectCountry.addEventListener("change", () => {
  let flagImg = document.createElement("img")
  flagImg.id = "flag"

  const existingImg = document.querySelector("img")

  if(existingImg){
    divSelect.removeChild(existingImg)
  }

  const selectedValue = selectCountry.value;
  if (flagspath[selectedValue]) {
    flagImg.src = flagspath[selectedValue];
    flagImg.style.display = "inline-block"; // mostrar si hay bandera
  } else {
    flagImg.src = "";
    flagImg.style.display = "none"; // ocultar si no hay país seleccionado
  }

  divSelect.insertBefore(flagImg,selectCountry)
});



let form = document.getElementById("miFormulario")

form.addEventListener("submit", function (e) {

  const nombre = document.getElementById("fullName").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const pais = document.getElementById("country").value

  let datos = {
    nombre: nombre,
    correo: email,
    contraseña: password,
    pais: pais
  }

  let usuariosGuardados = localStorage.getItem("Usuarios");
  if (usuariosGuardados) {
    usuariosGuardados = JSON.parse(usuariosGuardados);
  } else {
    usuariosGuardados = [];
  }

  usuariosGuardados.push(datos);

  localStorage.setItem("Usuarios", JSON.stringify(usuariosGuardados));
})