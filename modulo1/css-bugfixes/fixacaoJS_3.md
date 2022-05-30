```
function calculaNota(ex, p1, p2) {
    
   let exemplo = ex*1;
   let ponto1 = p1*2;
   let ponto2 = p2*3;
   let media = ((exemplo + ponto1 + ponto2) / 6).toFixed(2);

   if (media >= 9) {
      return "A";
   } else if (media < 9 || media >= 7.5) {
      return "B";
   } else if (media < 7.5 || media >= 6) {
      return "C";
   } else if (media < 6 ) {
      return "D";
   } 
```