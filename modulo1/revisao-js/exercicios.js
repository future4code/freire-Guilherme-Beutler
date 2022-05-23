// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    reverseArray = array.reverse();
    return reverseArray;   
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    array.sort((a, b) => a - b);
    return array;
}


// EXERCÍCIO 04
function retornaNumerosPares(array) {
    par = x => x % 2 === 0
    let pares = [];
    for (i = 0; i < array.length; i++) {
        if (par(array[i])) {
            pares.push(array[i]);
        }
    }
    return pares;
}


// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    par = x => x % 2 === 0
    let pares = [];
    for (i = 0; i < array.length; i++) {
        if (par(array[i])) {
            pares.push(array[i]**2);
        }
    }
    return pares; 
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0;
    for (let i = 0; i < array.length; i++) {
        let numero = array[i];
        if (numero > maiorNumero) {
            maiorNumero = numero;
        }
    } 
    return maiorNumero;
}   

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let objeto = {
        maiorNumero: Math.max(num1, num2),
        maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
        diferenca: Math.abs(num1 - num2)
    }
    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = [];
    for (let i = 0; numerosPares.length < n; i++) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }
    return numerosPares;
}
retornaNPrimeirosPares();


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA == ladoB && ladoB == ladoC) {
        return "Equilátero";
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    retornaArrayOrdenado(array);
    let novoArray = [array[array.length-2], array[1]];
    return novoArray
}


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    const novaPessoa = {
        ...pessoa,
        nome: "ANÔNIMO"
    }
    return novaPessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    autorizadas = pessoas.filter(pessoa => pessoa.idade > 14 && pessoa.idade < 60 & pessoa.altura >= 1.5);
    return autorizadas;
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    naoAutorizadas = pessoas.filter(pessoa => pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5);
    return naoAutorizadas;
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    return contas.map((cliente) => {
        cliente.compras.map((compra) => {
            cliente.saldoTotal = cliente.saldoTotal - compra
        })
        cliente.compras = [];
        return cliente;
    })
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    consultas.sort(function(a, b) {
        if(a.nome < b.nome) {
            return -1
        } else {
            return true
        }
    })
    return consultas;
}


// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
    const dataFormatada = (item) => {
        let strData = item.dataDaConsulta;
        let partesData = strData.split("/");
        let data = new Date(partesData[2], partesData[1] - 1, partesData[0]);
        return data;
    }
    const formatarData = (item) => {
        let data = item.dataDaConsulta;
        let primeiraData = (`0` + (data.getDate())).slice(-2) + "/" + (`0` + (data.getMonth() + 1)) + "/" + data.getFullYear();
        return primeiraData;
    }
    return consultas.map(item => {
        return {...item, dataDaConsulta: dataFormatada(item)}
    })
    .sort(function(a, b){
        if (a.dataDaConsulta < b.dataDaConsulta) {
            return -1;
        } else {
            return true;
        }
    })
    .map(item => {
        return {...item, dataDaConsulta: formatarData(item)}
    })
}
