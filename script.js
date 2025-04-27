// Evento de clique para alternar o modo claro/escuro
document.getElementById('Modo').addEventListener('click', function () {
  const body = document.body;
  const icone = document.getElementById('iconeModo');

  // Alterna a classe do body para ativar ou desativar o modo escuro
  body.classList.toggle('ModoEscuro');

  // Verifica qual modo está ativo e altera o ícone
  if (body.classList.contains('ModoEscuro')) {
      icone.src = 'assets/images/icon-sun.svg'; // Ícone do sol (modo claro)
      icone.alt = 'Modo Claro';
  } else {
      icone.src = 'assets/images/icon-moon.svg'; // Ícone da lua (modo escuro)
      icone.alt = 'Modo Escuro';
  }
});

// Evento de clique no botão "active" para mostrar apenas quadrados com checkbox marcado
document.getElementById("active").addEventListener("click", () => {
const quadrados = document.querySelectorAll(".Quadrados");
const checkbox = document.querySelectorAll(".meuToggle"); 

quadrados.forEach((quadrado, index) => {
  // Mostra apenas os quadrados que têm o checkbox marcado
  if (checkbox[index] && checkbox[index].checked) {
    quadrado.style.display = "flex";
  } else {
    quadrado.style.display = "none";
  }

  // Deixa o botão "active" com estilo ativo e remove o estilo dos outros
  document.getElementById("active").classList.add("botao_ativo");
  document.getElementById("inactive").classList.remove("botao_ativo");
  document.getElementById("All").classList.remove("botao_ativo");
});
});

// Evento de clique no botão "inactive" para mostrar apenas quadrados com checkbox desmarcado
document.getElementById("inactive").addEventListener("click", () => {
const quadrados = document.querySelectorAll(".Quadrados");
const checkbox = document.querySelectorAll(".meuToggle");

quadrados.forEach((quadrado, index) => {
  // Mostra apenas os quadrados que têm o checkbox desmarcado
  if (checkbox[index] && !checkbox[index].checked) {
    quadrado.style.display = "flex";
  } else {
    quadrado.style.display = "none";
  }

  // Deixa o botão "inactive" com estilo ativo e remove o estilo dos outros
  document.getElementById("inactive").classList.add("botao_ativo");
  document.getElementById("active").classList.remove("botao_ativo");
  document.getElementById("All").classList.remove("botao_ativo");
});
});

// Evento de clique no botão "All" para mostrar todos os quadrados
document.getElementById("All").addEventListener("click", () => {
const quadrados = document.querySelectorAll(".Quadrados");

quadrados.forEach((quadrado) => {
  quadrado.style.display = "flex"; // Mostra todos
});

// Deixa o botão "All" com estilo ativo e remove o estilo dos outros
document.getElementById("All").classList.add("botao_ativo");
document.getElementById("inactive").classList.remove("botao_ativo");
document.getElementById("active").classList.remove("botao_ativo");
});

// Seleciona todos os botões de remover quadrados
const botoes = document.querySelectorAll('.remove');

// Para cada botão de remover, adiciona um evento de clique
botoes.forEach(function(botao) {
botao.addEventListener('click', function() {
  const quadrado = botao.closest('.Quadrados'); // Acha o quadrado correspondente
  if (quadrado) {
    quadrado.style.display = "none"; // Esconde o quadrado
  }
});
});
