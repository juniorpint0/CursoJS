let number = document.getElementById('number');
let res = document.getElementById('res');
let select = document.getElementById('select');
let vetor = [];
function adicionar(){
    if(validacao() == true){
        let n = Number(number.value);
        let item = document.createElement('option');
        item.text = `Valor ${n} adicionado.`;    
        vetor.push(n);
        select.appendChild(item);
    }
    
    
}
function finalizar(){
    validacao();
    console.log(vetor)
    quantidade(vetor);
    
    maiormenor(vetor);

}
function quantidade(v){
    res.innerHTML += `<p>Ao todo, temos ${v.length} números cadastrados.</p>`;

}
function maiormenor(v){
    let verificar = v;
    verificar.sort();
    let analizar = v.length;
    console.log(verificar)
    analizar = Number(analizar)-1;
    console.log(analizar)
    res.innerHTML += `<p>O maior valor informado foi ${verificar[analizar]}</p>`;

}
function soma(){

}
function media(){

}
function validacao(){
    if (number.value.length == 0 || number.value > 100) {
        window.alert('Por favor, digite um número de 1 a 100!');
        // res.innerHTML = '';
        return false;
    }else{
        return true;
    }
}