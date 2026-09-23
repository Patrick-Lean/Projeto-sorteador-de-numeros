
function sortear(){
    let quantidadeDeNumerosSorteados = parseInt(document.getElementById('quantidade').value);
    let limiteInferiorDeNumeros = parseInt(document.getElementById('de').value);
    let limiteSuperiorDeNumeros = parseInt(document.getElementById('ate').value);
    let listaDeNumerosSorteados = [];

    for (let i = 0; i < quantidadeDeNumerosSorteados; i++){
        let numeroSorteado = gerarNumeroAleatorio(limiteInferiorDeNumeros,limiteSuperiorDeNumeros);

        while(listaDeNumerosSorteados.includes(numeroSorteado)){
            numeroSorteado = gerarNumeroAleatorio(limiteInferiorDeNumeros,limiteSuperiorDeNumeros);
        }

        listaDeNumerosSorteados.push(numeroSorteado);
    }

   let resultado = document.getElementById('resultado');
   resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumerosSorteados} </label>`;
   alterarStatusBotaoSortear();
   alterarStatusBotaoReiniciar();
}

function gerarNumeroAleatorio(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotaoReiniciar();
    alterarStatusBotaoSortear();
}

function alterarStatusBotaoReiniciar(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function alterarStatusBotaoSortear(){
    let botao = document.getElementById('btn-sortear');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}


