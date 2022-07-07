function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fAno.value.length == 0 || fAno.value > ano){
        window.alert('Algo de errado não está certo, tente novamente.')
    }
    else{
        var fsex = document.getElementsByName('radsex')        
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var imgperson = document.createElement('img')
        imgperson.setAttribute('id', 'foto')

        if (gênero = (fsex[0].checked)){
            gênero = 'homem'
            if(idade >=0 && idade < 4){
                // bb
                imgperson.setAttribute('src', 'bebemenino.jpg')
            }
            else if(idade < 12){
                // garoto
                imgperson.setAttribute('src', 'menino.jpg')
            }
            
            else if(idade < 50){
                // homem
                imgperson.setAttribute('src', 'homem.jpg')
            }
            
            else if(idade > 50){
                // idoso
                imgperson.setAttribute('src', 'idoso.jpg')
            }
        } 
        else{
            gênero = 'mulher'
            if(idade >=0 && idade < 4){
                // bb
                imgperson.setAttribute('src', 'bebemenina.jpg')
            }
            else if(idade < 12){
                // garota
                imgperson.setAttribute('src', 'menina.jpg')
            }
            
            else if(idade < 50){
                // mulher
                imgperson.setAttribute('src', 'mulher.jpg')
            }
            
            else if(idade > 50){
                imgperson.setAttribute('src', 'idosa.jpg')
                // idoso
            }
        }
    }
        res.style.textAlign = 'center' // Alinhamento em JS
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(imgperson)
}