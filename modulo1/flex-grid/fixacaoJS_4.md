```
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let ocorrencias = 0
  
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (arrayDeNumeros[i] === numeroEscolhido) {
      ocorrencias = ocorrencias + 1
    }
  }
  
  if (ocorrencias === 0) {
    return "Número não encontrado"
  } else {
    return `O número ${numeroEscolhido} aparece ${ocorrencias}x`
  }
 }
 ```