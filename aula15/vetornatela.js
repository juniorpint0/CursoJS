let valores = [8, 1, 7, 4, 2, 9];
valores.sort()

console.log(valores); //Mostra todos valores guardados nos vetores

console.log(valores[0]); //Forma mais simples de mostrar os valores guardados
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);
/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
} //Melhor forma de mostrar todos valores de um vetores
*/
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`);
}//Forma simplificada do for