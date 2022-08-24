const nameUser: string = 'Guilherme'
const birthdate: string = '01/12/1992'

const printSentence = () => {
    const date: string[] = birthdate.split('/')
    const sentence: string = `Olá, me chamo ${nameUser}, 
        nasci no dia ${date[0]} do mês de ${date[1]} do ano de ${date[2]} `
    console.log(sentence)
}
printSentence()
