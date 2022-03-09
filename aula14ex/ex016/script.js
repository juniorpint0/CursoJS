function contar() {
	var inicio = Number(document.getElementById('txtini').value);
	var fim = Number(document.getElementById('txtfim').value);
	var passo = Number(document.getElementById('txtpas').value);
	var res = document.getElementById('res');

	if (inicio == 0 || fim == 0 || passo == 0) {
		res.innerHTML += `Impossível contar!`;
	} else {
		res.innerHTML = `Contando: `;
		if (inicio < fim) {
			//Contagem crescente
			for (i = inicio; i <= fim; i += passo) {
				res.innerHTML += `${i} \u{1F449}`;
			}
		} else {
			//Contagem decrescente
			for (i = inicio; i >= fim; i -= passo) {
				res.innerHTML += `${i} \u{1F449}`;
			}
		}
		res.innerHTML += `\u{1F3C1}`;
	}
}
