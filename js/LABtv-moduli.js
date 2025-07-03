const home = document.getElementById("home");

home.addEventListener("click", () => {
  main.style.display = "block";
  filterS.innerHTML = "";
  filtContainer.style.display = "none";
  string = [];
  inpFilt.value = string;
  console.log("clicco sulla home");
});

const container = document.querySelector(".container");
const contact = document.querySelector("li#contact");
const menuLogin = document.querySelector(".menu-login");
// console.log(container)

contact.addEventListener("click", () => {
  modulo.style.display = "block";
  main.style.display = "none";
  filtContainer.style.display = "none";
  header.style.display = "none";
});

let module = document.getElementById("module");
let nameInput = document.getElementById("nome");
let email = document.getElementById("email");
let phone = document.getElementById("tel");
let conditions = document.getElementById("privacy");
let btn = document.querySelector("button");
let modulo = document.getElementById("modulo");
let textArea = document.getElementById("textarea");
// console.log(textArea)

module.addEventListener("submit", function (event) {
  event.preventDefault();

  campName(nameInput);
  campMail(email);
  campTextArea(textArea);
  campPhone(phone);
  campConditions(conditions);
});

nameFocus(nameInput);
emailFocus(email);
textAreaFocus(textArea);
phoneFocus(phone);
conditionsFocus(conditions);

// FUNZIONE CONTROLLO DEL NOME
function campName(nameValor) {
  if (necessary(nameValor.value)) {
    nameValor.classList.add("errore");
    nameValor.nextElementSibling.innerHTML = "Campo obbligatorio";
  } else if (checkName(nameValor.value)) {
    nameValor.classList.remove("errore");
    nameValor.nextElementSibling.innerHTML = "";
  } else {
    nameValor.classList.add("errore");
    nameValor.nextElementSibling.innerHTML = "Il nome è sbagliato";
  }
}

function checkName(input) {
  console.log(nameValor.value);
  const regexName = /^[a-zA-Z ]+$/;
  return regexName.test(input);
}

// Focus campo nome
function nameFocus(nameValor) {
  nameValor.addEventListener("focus", () => {
    nameValor.classList.remove("errore");
    nameValor.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

// FUNZIONE CONTROLLO CAMPO EMAIL
function campMail(emailValor) {
  if (necessary(emailValor.value)) {
    emailValor.classList.add("errore");
    // console.log(emailValor.value)
    emailValor.nextElementSibling.innerHTML = "Campo obbligatorio";
  } else if (checkMail(emailValor.value)) {
    emailValor.classList.remove("errore");
    emailValor.nextElementSibling.innerHTML = "";
  } else {
    emailValor.classList.add("errore");
    emailValor.nextElementSibling.innerHTML = "Non è una mail";
  }
}

function checkMail(inputMail) {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(inputMail);
}
// Focus campo email
function emailFocus(emailValor) {
  emailValor.addEventListener("focus", () => {
    emailValor.classList.remove("errore");
    emailValor.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

// FUNZIONE DI CONTROLLO DEL TELEFONO
function campPhone(phoneValor) {
  if (necessary(phoneValor.value)) {
    phoneValor.classList.add("errore");
    console.log(phoneValor.value);
    phoneValor.nextElementSibling.innerHTML = "Campo obbligatorio";
  } else if (checkPhone(phoneValor.value)) {
    phoneValor.classList.remove("errore");
    phoneValor.nextElementSibling.innerHTML = "";
  } else {
    phoneValor.classList.add("errore");
    phoneValor.nextElementSibling.innerHTML = "Non è un numero italiano valido";
  }
}

function checkPhone(input) {
  const regex =
    /^([+]39)?((38[{8,9}|0])|(34[{0-9}|0])|(36[6|8|0])|(33[{3-9}|0])|(32[{8,9}]))([\d]{7})$/;
  return regex.test(input);
}
// Focus campo phone
function phoneFocus(phoneValor) {
  phoneValor.addEventListener("focus", function () {
    phoneValor.classList.remove("errore");
    phoneValor.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

// FUNZIONE TEXAREA

function campTextArea(textAreaValor) {
  if (necessary(textAreaValor.value)) {
    textAreaValor.classList.add("errore");
    textAreaValor.nextElementSibling.innerHTML = "Campo obbligatorio";
  } else if (checkTextArea(textAreaValor.value)) {
    textAreaValor.classList.remove("errore");
    textAreaValor.nextElementSibling.innerHTML = "";
  } else {
    textAreaValor.classList.add("errore");
    textAreaValor.nextElementSibling.innerHTML =
      "Il testo deve contenere tra i 10 e 300 caratteri";
    console.log("sono nel controllo textarea");
  }
}

function checkTextArea(inputText) {
  
  const regextextAreaValor = /^.{10,300}$/s;
  return regextextAreaValor.test(inputText);
}

// Focus campo TEXTAREA
function textAreaFocus(textAreaValor) {
  textAreaValor.addEventListener("focus", () => {
    textAreaValor.classList.remove("errore");
    textAreaValor.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

// FUNZIONE CONTROLLO CHECKBOX - CONDIZIONI
function campConditions(conditionsValor) {
  if (!conditionsValor.checked) {
    conditionsValor.classList.add("errore");
    conditionsValor.nextElementSibling.nextElementSibling.innerHTML =
      "Devi accettare le condizioni";
  } else {
    conditionsValor.classList.remove("errore");
    conditionsValor.nextElementSibling.nextElementSibling.innerHTML = "";
  }
}
// Focus campo checkbox
function conditionsFocus(conditionsValor) {
  conditionsValor.addEventListener("focus", function () {
    conditionsValor.classList.remove("errore");
    conditionsValor.nextElementSibling.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

// FUNZIONE GENERALE A TUTTI I CAMPI SE NON SCRIVO NULLA
function necessary(empty) {
  if (empty.trim().length == 0) {
    return true;
  } else {
    return false;
  }
}

// FUNZIONE CONTROLLO LOGIN

menuLogin.addEventListener("click", () => {
  moduleContLog.style.display = "block";
  main.style.display = "none";
  header.style.display = "none";
});

const moduleContLog = document.querySelector(".module-container");
const moduleLogin = document.getElementById("form-login-request");

const mailLogin = document.getElementById("email-login");
const passLogin = document.getElementById("password-login");
const checkboxLogin = document.getElementById("privacy-login");

moduleLogin.addEventListener("submit", function (event) {
  event.preventDefault();

  campMail(mailLogin);
  campPassword(passLogin);
  campConditions(checkboxLogin);
});

emailFocus(mailLogin);
conditionsFocus(checkboxLogin);
passwordFocus(passLogin);

// FUNZIONE CONTROLLO PASSWORD

function campPassword(passLoginValor) {
  if (necessary(passLoginValor.value)) {
    passLoginValor.classList.add("errore");
    console.log(passLoginValor.value);
    passLoginValor.nextElementSibling.innerHTML = "Campo obbligatorio";
  } else if (checkPassword(passLoginValor.value)) {
    passLoginValor.classList.remove("errore");
    passLoginValor.nextElementSibling.innerHTML = "";
  } else {
    passLoginValor.classList.add("errore");
    passLoginValor.nextElementSibling.innerHTML =
      "La password deve contenere almeno 8 caratteri, una lettera maiuscola, una minuscola, un numero e un carattere speciale";
  }
}

function checkPassword(inputPassword) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;
  return regex.test(inputPassword);
}

// Focus campo checkbox
function passwordFocus(passLoginValor) {
  passLoginValor.addEventListener("focus", () => {
    passLoginValor.classList.remove("errore");
    passLoginValor.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

//MODULO REGISTRAZIONE

const moduleRegisterCont = document.querySelector(".module-container-register");
const menuReg = document.querySelector(".menu-reg");
const moduleRegister = document.getElementById("form-register-request");
const nameRegister = document.getElementById("nome-register");
const lastNameRegister = document.getElementById("cognome-register");
const phoneRegister = document.getElementById("phone-register");
const mailRegister = document.getElementById("email-register");
const passRegister = document.getElementById("password-register");
const passRegisterDouble = document.getElementById("password-register-double");
const checkboxRegister = document.getElementById("privacy-register");

menuReg.addEventListener("click", () => {
  moduleRegisterCont.style.display = "block";
  main.style.display = "none";
  header.style.display = "none";
});

moduleRegister.addEventListener("submit", function (event) {
  event.preventDefault();

  campName(nameRegister);
  campLastName(lastNameRegister);
  campMail(mailRegister);
  campPhone(phoneRegister);
  campPassword(passRegister);
  campPasswordDouble();
  campConditions(checkboxRegister);
});

nameFocus(nameRegister);
lastNameFocus(lastNameRegister);
emailFocus(mailRegister);
phoneFocus(phoneRegister);
passwordFocus(passRegister);
conditionsFocus(checkboxRegister);

function campLastName(lastNameRegisterValor) {
  if (necessary(lastNameRegisterValor.value)) {
    lastNameRegisterValor.classList.add("errore");
    lastNameRegisterValor.nextElementSibling.innerHTML = "Campo obbligatorio";
  } else if (checkName(lastNameRegisterValor.value)) {
    lastNameRegisterValor.classList.remove("errore");
    lastNameRegisterValor.nextElementSibling.innerHTML = "";
  } else {
    lastNameRegisterValor.classList.add("errore");
    lastNameRegisterValor.nextElementSibling.innerHTML = "Il nome è sbagliato";
  }
}

function checkName(input) {
  //   console.log(lastNameRegisterValor.value);
  const regexName = /^[a-zA-Z ]+$/;
  return regexName.test(input);
}

// Focus campo nome
function lastNameFocus(lastNameRegisterValor) {
  lastNameRegisterValor.addEventListener("focus", () => {
    lastNameRegisterValor.classList.remove("errore");
    lastNameRegisterValor.nextElementSibling.innerHTML = "";
    console.log("sono nel focus");
  });
}

function campPasswordDouble() {
  if (passRegisterDouble !== passRegister) {
    passRegisterDouble.classList.add("errore");
    passRegisterDouble.nextElementSibling.innerHTML =
      "Le password sono diverse";
  } else {
    passRegisterDouble.classList.remove("errore");
    passRegisterDouble.nextElementSibling.innerHTML = "";
  }
}
