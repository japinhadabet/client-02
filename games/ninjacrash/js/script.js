const btn = document.getElementById("btnCreate");
const cortes = document.getElementById("cortes");
const porcentagem = document.getElementById("porcentagem");

function generateRandomNumber(x, y) {
  return Math.ceil(Math.random() * (y - x + 1)) + x;
}

const generateRandomPercentage = () => {
  let valorFinal = generateRandomNumber(50, 100);
  return (porcentagem.textContent = valorFinal.toFixed(2) + "%");
};

function getCortes() {
  cortes.textContent = generateRandomNumber(1, 3);
}

btn.addEventListener("click", () => {
  getCortes();
  generateRandomPercentage();
});
