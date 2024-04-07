/*
    Objetivo 1 - Quando o user clicar no botão de motrar mais deve abrie os projetos que estão escondidos no html
    Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele.
    Passo 2 - Identificar o clique no botão.
    Passo 3 - Adicionar a classe "ativo" nos projetos escondidos.

    Objetivo 2 - Esconder o botão de mostrar mais.
    Passo 1 - Pegar o botão e esconder ele.
*/

    //Objetivo 1 - Quando o user clicar no botão de motrar mais deve abrie os projetos que estão escondidos no html
    //Passo 1 - Pegar o botão mostrar mais no JS pra poder verificar quando o usuário clicar em cima dele.
   
    const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
    const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');


    botaoMostrarProjetos.addEventListener('click', () => {
    //Passo 3 - Adicionar a classe "ativo" nos projetos escondidos.
    MostrarMaisProjetos();

    // Objetivo 2 - Esconder o botão de mostrar mais.
    //Passo 1 - Pegar o botão e esconder ele.
    esconderBotao();
   });

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function MostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
