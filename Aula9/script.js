function conte(){
    let inicia = document.getElementById('initial')
    let passo = document.getElementById('passus')
    let finish = document.getElementById('finish')
    let res = document.getElementById('res')

    if (inicia.value.length == 0 || finish.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados.')
    }
    else{
        res.innerHTML = 'Contando...'
        let i = Number(inicia.value)
        let f = Number(finish.value)
        let p = Number(passo.value)
            if(i < f){
                // contagem crescente
                for (let x = i;x <= f; x += p){
                    res.innerHTML += `${x} 👀 `
                }
            }
            else{
                // contagem decrescente
                for (let x = i;x >= f; x -= p){
                    res.innerHTML += `${x} 👀 `
                }
            }
    }   
        res.innerHTML += `\u{1F3C1}` // Site da Unicode

}