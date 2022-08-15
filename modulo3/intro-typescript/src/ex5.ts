const anoAtual: number = Number(process.argv[2])
const anoNascimento: number = Number(process.argv[3])
const anoEmissao: number = Number(process.argv[4])

const checkRenovacaoRG = (anoAtual: number, anoNascimento: number, anoEmissao: number) => {
    let idade: number = anoAtual - anoNascimento
    let tempoCarteira: number = anoAtual - anoEmissao

    if (idade <= 20) {
        return tempoCarteira >= 5 ?
            'passou 5 anos, precisa renovar' :
            'ainda não venceu'
    } else if (idade >= 20 || idade <= 50) {
        return tempoCarteira >= 10 ?
            'passou 10 anos, precisa renovar' :
            'ainda não passou 10 anos'
    } else if (idade > 50) {
        return tempoCarteira >= 15 ?
            'passou dos 15 anos, precisa renovar' :
            'ainda não passou os 15 anos'
    } else {
        return 'error'
    }

}
console.log(checkRenovacaoRG(2022, 1992, 2015))