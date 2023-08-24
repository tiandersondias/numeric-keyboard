function enterKey(idKeyBoard) {
  document.querySelector(idKeyBoard).textContent();
}
const keyBoardSelector = document.querySelectorAll("input[type=button]");
const inputTel = document.querySelector("input[type=tel]");

//For
for (let count = 0; count < keyBoardSelector.length; count++) {
  const key = keyBoardSelector[count];

  key.onclick = function () {
    inputTel.value = inputTel.value + key.value;
  };

  //Keyboard Event
  const listaDeTeclas = document.querySelectorAll("input[type=button]");

  for (let indice = 0; indice < listaDeTeclas.length; indice++) {
    const tecla = listaDeTeclas[indice];

    tecla.onkeydown = function (evento) {
      if (evento.code === "Enter" || evento.code === "Space") {
        tecla.classList.add("ativa");
      }
    };
    tecla.onkeyup = function () {
      tecla.classList.remove("ativa");
    };
  }
}
