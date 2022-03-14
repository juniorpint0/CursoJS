let num = [5, 8, 16, 3, 12];
num.push(1); //Adiciona numero 1 na ultima posição
num.sort(); //Coloca o vetor do menor valor ao maior
console.log(num);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O primeiro valor do vetor é ${num[0]}`);
let pos = num.indexOf(8); //procura a posição de onde esta armazenado o valor 8
console.log(`O valor 8 está na posição ${pos}`);
pos = num.indexOf(2); //Se o valor não existir em nenhuma posição ele retorna -1
console.log(`O valor 2 está na posição ${pos}`);