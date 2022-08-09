const operation = process.argv[2]
const value1 = Number(process.argv[3])
const value2 = Number(process.argv[4])

switch (operation) {
    case 'add':
        console.log('A', operation, 'de', value1, 'e', value2, 'é:', value1 + value2)
        break;
    case 'sub':
        console.log('A', operation, 'de', value1, 'e', value2, 'é:', value1 - value2)
        break;
    case 'div':
        console.log('A', operation, 'de', value1, 'e', value2, 'é:', value1 / value2)
        break;
    case 'mult':
        console.log('A', operation, 'de', value1, 'e', value2, 'é:', value1 * value2)
        break;
}