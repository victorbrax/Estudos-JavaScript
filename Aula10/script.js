function gere(){
    let numimp = Number(document.getElementById('numuser').value)
    let res = document.getElementById('tabuada')

    let c = 1
    res.innerHTML = '' // pra limpar a cada nova geracao
    while (c <= 100){
        let item = document.createElement('option') // criando opcoes la no select
        item.text = `${numimp} x ${c} é igual a ${numimp*c}`
        res.appendChild(item)
        c++
    }
}