let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10, por favor:';

function verificarChute()
{
    console.log('O botão foi clicado.');
}

function exibirMensagemNoConsole()
{
    console.log('O botão foi clicado!');
}

function exibirAlerta()
{
    alert('Eu amo Js');
}

function exibirPrompt()
{
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert(`Estive em ${nomeDaCidade} e lembrei de você`);
}

function somandoDoisNumeros()
{
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}