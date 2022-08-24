type Film = {
    name: string,
    year: number,
    genre: string,
    score?: number
}

enum Genero {
    ACAO = 'ação',
    DRAMA = 'drama',
    COMEDIA = 'comédia',
    ROMANCE = 'romance',
    TERROR = 'terror'
}

const printFilm = (name: string, year: number, genre: Genero, score?: number) => {
    if (score) {
        return {
            name: name,
            year: year,
            genre: genre,
            score: score
        }
    } else {
        return {
            name: name,
            year: year,
            genre: genre,
        }
    }
}
console.log(printFilm('Duna', 2021, Genero.ACAO, 74))