const ano: number = Number(process.argv[2])

const checkYear = (ano: number) => {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)

    if (cond1 || cond2 === true) {
        return "Ano Bissexto";
    } else {
        return "O ano não é Bissexto"
    }
}
console.log(checkYear(2011))