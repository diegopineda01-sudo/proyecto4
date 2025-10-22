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

const countries = {
  ar: "Argentina",
  pe: "Perú",
  mx: "México",
  es: "España",
  us: "Estados Unidos"
};

const flagsPath = "/proyecto4/img/svg/";

const dropdown = document.querySelector("#country-select .select-dropdown");
const selected = document.querySelector("#country-select .selected-value");

Object.entries(countries).forEach(([code, name]) => {
  const li = document.createElement("li");
  const img = document.createElement("img")
  img.src = flagsPath + code + ".svg"
  img.className = "banderas"
  li.append(img,document.createTextNode(name)) ;
  li.setAttribute("data-value", code);
  dropdown.appendChild(li);
});

dropdown.addEventListener("click", (e) => {
  if (e.target.closest("li")) {
    const li = e.target.closest("li");
    selected.innerHTML = li.innerHTML;
    selected.setAttribute("data-selected", li.dataset.value);
    dropdown.classList.add("hidden");
  }
});

const customSelects = document.querySelectorAll(".custom-select");
customSelects.forEach((customSelect) => {
  const selectButton = customSelect.querySelector(".select-button");
  const dropdown = customSelect.querySelector(".select-dropdown");

  selectButton.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });
});

let form = document.getElementById("miFormulario")

form.addEventListener("submit", function (e) {

  const nombre = document.getElementById("fullName").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const pais = document.querySelector("")

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