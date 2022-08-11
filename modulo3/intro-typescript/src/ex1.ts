const sideA = Number(process.argv[2])
const sideB = Number(process.argv[3])
const sideC = Number(process.argv[4])

function checaTriangulo (sideA:number, sideB:number, sideC:number) {
    if (sideA !== sideB && sideB !== sideC) {
        return "Escaleno";
    } else if (sideA === sideB && sideB === sideC) {
        return "Equilátero"
    } else {
        return "Isósceles"
    }
}

console.log(checaTriangulo(1,1,1))