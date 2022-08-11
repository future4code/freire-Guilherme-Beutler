const numeros: number[] = [5,11,20,15,6]


const obterEstatisticas = (numeros: number[]) => {
    const numerosOrdenados: number[] = numeros.sort((a, b) => a - b)

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log()