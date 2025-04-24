document.getElementById('Modo').addEventListener('click', function () {
    const body = document.body;
    const icone = document.getElementById('iconeModo');

    // Alterna a classe do body para ativar ou desativar o modo escuro
    body.classList.toggle('ModoEscuro');

    // Verifica qual modo está ativo e altera o ícone
    if (body.classList.contains('ModoEscuro')) {
        icone.src = 'assets/images/icon-sun.svg'; // Ícone do sol
        icone.alt = 'Modo Claro';
    } else {
        icone.src = 'assets/images/icon-moon.svg'; // Ícone da lua
        icone.alt = 'Modo Escuro';
    }
});

document.getElementById("active").addEventListener("click", () => {
  const quadrados = document.querySelectorAll(".Quadrados");
  const checkbox = document.querySelectorAll(".meuToggle"); 

  quadrados.forEach((quadrado, index) => {

    if (checkbox[index] && checkbox[index].checked) {
      quadrado.style.display = "flex";
    } else {
      quadrado.style.display = "none";
    }

    document.getElementById("active").classList.add("botao_ativo");

    document.getElementById("inactive").classList.remove("botao_ativo");
    document.getElementById("All").classList.remove("botao_ativo");
  });
});

document.getElementById("inactive").addEventListener("click", () => {
  const quadrados = document.querySelectorAll(".Quadrados");
  const checkbox = document.querySelectorAll(".meuToggle");

  quadrados.forEach((quadrado, index) => {
    if (checkbox[index] && !checkbox[index].checked) {
      quadrado.style.display = "flex"; // Mostra os desmarcados
    } else {
      quadrado.style.display = "none"; // Esconde os marcados
    }

    document.getElementById("inactive").classList.add("botao_ativo");

    document.getElementById("active").classList.remove("botao_ativo");
    document.getElementById("All").classList.remove("botao_ativo");
  });
});


document.getElementById("All").addEventListener("click", () => {
  const quadrados = document.querySelectorAll(".Quadrados");
  quadrados.forEach((quadrado) => {
    quadrado.style.display = "flex"; 
    });     

    document.getElementById("All").classList.add("botao_ativo");

    document.getElementById("inactive").classList.remove("botao_ativo");
    document.getElementById("active").classList.remove("botao_ativo");
  });


const botoes = document.querySelectorAll('.remove');

botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {
    const quadrado = botao.closest('.Quadrados'); // Encontra o contêiner pai mais próximo com a classe .Quadrados
    if (quadrado) {
      quadrado.style.display = "none";
    }
  });
});



