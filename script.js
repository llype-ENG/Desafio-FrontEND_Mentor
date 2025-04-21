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

const botoes = document.querySelectorAll('.remove');

botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {

    botao.classList.toggle('active');
  });
});



