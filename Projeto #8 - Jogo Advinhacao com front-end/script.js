// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const bntReset = document.querySelector("#btnTry");
var randomNumber = Math.round(Math.random() * 10);
let tentativas = 1;

// Eventos
btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
document.addEventListener("keydown", enterToReset);

// Funcões
function handleTryClick(event){
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");  

  if(Number(inputNumber.value) == randomNumber) {
    toggleScreen();
  }
  document.querySelector(".screen2 h2").innerText =  `Você acertou em ${tentativas} tentativas`;

  inputNumber.value = "";
  tentativas++;
}

function handleResetClick() {
  toggleScreen();
  tentativas = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function enterToReset(e){
  if(e.key == 'Enter') {
    handleResetClick();
  }
}

























