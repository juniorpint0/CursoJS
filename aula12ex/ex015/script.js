function checar(){
    var data = new Date();
    var ano = data.getFullYear();
    console.log(ano);

    var fano = window.document.getElementById("txtano");
    console.log(fano.value);
    var res = window.document.querySelector("div#res");
    var fsex = window.document.getElementsByName("radsex");
    
    
    if(fano.value.lengh == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!");
    }else{
        var idade = ano - Number(fano.value);
        var img = document.createElement('img');
        var genero = ""
        if(fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'menino.png');
            }else if (idade >= 11 && idade <= 23){
                //Jovem
                img.setAttribute('src', 'homemjovem.png');
            }else if(idade >= 24 && idade <= 50){
                //Adulto
                img.setAttribute('src', 'homem.png');
            }else{
                //Idoso
                img.setAttribute('src', 'senhor.png');
            }
        }else {
            genero = 'mulher';
            if(idade >= 0 && idade <= 14){
                //Criança
                img.setAttribute('src', 'menina.png');
            }else if (idade >= 15 && idade <= 23){
                //Jovem
                img.setAttribute('src', 'mulherjovem.png');
            }else if(idade >= 24 && idade <= 50){
                //Adulto
                img.setAttribute('src', 'mulher.png');
            }else{
                //Idoso
                img.setAttribute('src', 'senhora.png');
            }
            
        }

        if(idade <= 1 ){
            res.innerHTML = `Detectamos ${genero} com ${idade} ano.`;
        }else {
            res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        }
        
        res.appendChild(img);
        
        
    }



    var sex = window.document.getElementById("sex");

    
}