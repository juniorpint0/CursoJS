let number = document.getElementById('number');
let res = document.getElementById('res');
let select = document.getElementById('select');
let vetor = [];
function adicionar() {
	if (validacao() == true) {
		let n = Number(number.value);
		let item = document.createElement('option');
		item.text = `Valor ${n} adicionado.`;
		vetor.push(n);
		select.appendChild(item);
	}
	number.value = '';
	number.focus();
	res.innerHTML = '';
}
function finalizar() {
	if (vetor.length != 0) {
		res.innerHTML = '';
		console.log(vetor);
		quantidade(vetor);
		maiormenor(vetor);
		soma(vetor);
		media(vetor);
	} else {
		window.alert('Por favor, digite um número!');
	}
}
function quantidade(v) {
	res.innerHTML += `<p>Ao todo, temos ${v.length} números cadastrados.</p>`;
}
function maiormenor(v) {
	let verificar = v;
	verificar.sort((a, b) => {
		if (a > b) return 1;
		if (a < b) return -1;
	});
	let analizar = v.length;
	analizar = Number(analizar) - 1;
	res.innerHTML += `<p>O maior valor informado foi ${verificar[analizar]}.</p>`;
	res.innerHTML += `<p>O menor valor informado foi ${verificar[0]}.</p>`;
}
function soma(v) {
	let soma = 0;
	let analizar = Number(v.length);
	console.log(`analizar ${analizar}`);
	for (let i = 0; i < analizar; i++) {
		console.log(i);
		soma += v[i];
	}
	res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
}
function media(v) {
	let soma = 0;
	let analizar = Number(v.length);
	for (let i = 0; i < analizar; i++) {
		console.log(i);
		soma += v[i];
	}
	res.innerHTML += `<p>A média dos valores digitados é ${soma / analizar}.</p>`;
}
function validacao() {
	
	if (number.value.length == 0 || number.value > 100 || number.value <= 0) {
		window.alert('Por favor, digite um número de 1 a 100!');
		// res.innerHTML = '';
		return false;
	} else if (vetor.indexOf(Number(number.value)) == -1) {
		return true;
	} else {
		window.alert('Esse número de já existe na lista!');
		return false;
	}
	
}
