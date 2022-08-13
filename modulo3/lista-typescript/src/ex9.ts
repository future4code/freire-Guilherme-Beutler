const anagram = (word: string): number => {
    const numberOfLetters = word.length

    if (numberOfLetters === 0) {
        return 1
    }

    let result = 1

    for (let i = numberOfLetters; i > 0; i--) {
        result *= i
    }
    
    return result
}
console.log(anagram('guilherme'))