/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão mostrar mais no JS pra poder verigicar quando o usuário clicar em cima

        Passo 2 - identificar o clique no botão

        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais

        Passo 1 - pegar o botão e esconder ele
*/

const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    if(botaoMostrarProjetos.innerHTML === 'Mostrar mais'){
        mostrarMaisProjetos();
        mudarParaMostrarMenos();
    }else{
        esconderProjetos();
        mudarParaMostrarMais();
    }
});

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

function mudarParaMostrarMenos(){
    botaoMostrarProjetos.innerHTML = 'Mostrar menos';
}

function esconderProjetos(){
    projetosInativos.forEach(projetoEscondido => {
        if(projetoEscondido.classList.contains('ativo')){
            projetoEscondido.classList.remove('ativo');
        }
    });
}

function mudarParaMostrarMais(){
    botaoMostrarProjetos.innerHTML = 'Mostrar mais';
}


