```
function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
const salarioFixo = 2000;
const porcentagemVendas = valorTotalVendas*0.05;
const valorTotalSalario = (100*qtdeCarrosVendidos) + salarioFixo + porcentagemVendas;
return valorTotalSalario
}
```