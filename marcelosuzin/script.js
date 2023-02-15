function calculateBMI() {
  var weight = document.getElementById("weight").value;
  var height = document.getElementById("height").value;
  var bmi = weight / (((height / 100) * height) / 100);
  bmi = bmi.toFixed(2);
  var classification;

  switch (true) {
    case bmi < 18.5:
      classification = "MAGREZA";
      break;
    case bmi >= 18.5 && bmi <= 24.9:
      classification = "NORMAL";
      break;
    case bmi >= 25 && bmi <= 29.9:
      classification = "SOBREPESO";
      break;
    case bmi >= 30 && bmi <= 39.9:
      classification = "OBESIDADE";
      break;
    case bmi > 40:
      classification = "OBESIDADE GRAVE";
      break;
    default:
      classification = "DADOS INVÁLIDOS";
  }
  var resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = "Seu IMC é " + bmi + " , você está : " + classification;
}

// Selecione todos os links de ancoragem
var links = document.querySelectorAll('a[href*="#"]');

// Adiciona um evento de clique a cada link
links.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // Previne o comportamento padrão de clique do link
    e.preventDefault();

    // Obtém o ID do alvo
    var targetId = link.getAttribute("href").substring(1);

    // Obtém o elemento alvo
    var target = document.getElementById(targetId);

    // Rola a página até o elemento alvo
    target.scrollIntoView({behavior: "smooth"});
  });
});

function showpopup() {
  document.getElementById("popupContainer").style.display = "block";
  document.getElementsByClassName("container")[0].style.filter = "blur(3px)";
  document.getElementById("sobre").style.filter = "blur(3px)";
  document.getElementById("clientes").style.filter = "blur(3px)";


}

function hidePopup() {
  document.getElementById("popupContainer").style.display = "none";
  document.getElementsByClassName("container")[0].style.filter = "blur(0px)";
  document.getElementById("sobre").style.filter = "blur(0px)";
  document.getElementById("clientes").style.filter = "blur(0px)";
}
