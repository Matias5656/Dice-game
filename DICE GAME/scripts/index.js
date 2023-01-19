//document.querySelector("h1").textContent = "Refresh Me";

// --------------------------Refrigero

// ------------tirar dados
// generar numeros random y que cambien a la imagen de dado que se requiere
// generar numero random
var randomNumber = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
// obtener imagenes
var img = document.querySelectorAll(".dice-container img");
// concatenar el src de imagen random
var concat = "images\\dice" + randomNumber + ".png";
var concat2 = "images\\dice" + randomNumber2 + ".png";
// hacer imagen random
img[0].setAttribute("src", concat);
img[1].setAttribute("src", concat2);
// ------------- decidir quien gana
function ganador() {
  if (randomNumber > randomNumber2) {
    document.querySelector("h1").textContent = "Player " + 1 + " is the winner!";
    document.querySelectorAll(".title-container img")[0].classList.remove("hidden");
  } else if (randomNumber < randomNumber2) {
    document.querySelector("h1").textContent = "Player " + 2 + " is the winner!";
    document.querySelectorAll(".title-container img")[1].classList.remove("hidden");
  } else if (randomNumber == randomNumber2) {
    document.querySelector("h1").textContent = "Tie!";
  }
}
// Hacer toggle a la bandera ganadora

// -------------- editar el texto al ganador
ganador();
