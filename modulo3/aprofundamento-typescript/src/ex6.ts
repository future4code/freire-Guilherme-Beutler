/* 
PRÉ-HISTORIA: >= 4000 AC
IDADE-ANTIGA: > 4000 AC && <= 476 DC
IDADE-MEDIA : > 476 DC && >= 1453 DC
IDADE-MODER : > 1453 DC && <= 1789 DC
IDADE-CONTE : > 1789 DC
*/

type Infos = {
    ano: number
    sigla: string | undefined
}
const infosUser: Infos = {
    ano: 1992,
    sigla: ''
}

const ano = Number(infosUser.ano)
const sigla = infosUser.sigla?.toLocaleUpperCase()

const informPeriod = (infosUser: Infos) => {
    if (ano <= 4000 && sigla === "AC") {
        return "PRÉ-HISTÓRIA"
    } else if (ano < 4000 && sigla === "AC" || ano < 476 && sigla === "") {
        return "IDADE-ANTIGA"
    } else if (ano > 476 && ano <= 1453 && sigla === "DC" || ano > 476 && ano <= 1453 && sigla === "") {
        return 'IDADE-MÉDIA'
    } else if (ano > 1453 && ano <= 1789 && sigla === "DC" || ano > 1453 && ano <= 1789 && sigla === "") {
        return 'IDADE-MODERNA'
    } else if (ano > 1789 && sigla === "DC" || ano > 1789 && sigla === "") {
        return 'IDADE-CONTEMPORÂNEA'
    } else if (sigla !== 'dc' && sigla !== "ac") {
        return "A sigla informada é invalida"
    }
}
console.log(informPeriod(infosUser))