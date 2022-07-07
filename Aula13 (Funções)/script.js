let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }
    else{
        return false
    }

}

function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }
    else{
        return false
    }

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        alert('Correto!')
        valores.push(Number(num.value))
        let item = document.createElement('option') // criando opçao la no baguio
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) // adicionando a opçao la na lista
        res.innerHTML =''
    }
    else{
        window.alert('Erro')
    }
    num.value = '' // zerando o num pro usuario n ter q ficar apagando
    num.focus() // "colocar o cursor" do mouse piscando la na caixinha de texto
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes')
    }
    else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for (let pos in valores){ // laço de percuso q ve qual o mairo e menor
            soma += valores[pos]
            if(valores[pos] > maior){
                maior = valores[pos]
            }
            if(valores[pos] < menor){
                menor < valores[pos]
            }
        }
        media = soma / tot
        res.innerHTML = '' // limpando o div que ja esta la
        res.innerHTML += `<p>Ao todo, temos ${tot} elementos.</p>`
        res.innerHTML += `<p>Menor valor foi ${menor}.</p>`
        res.innerHTML += `<p>Maior valor foi ${maior}.</p>`
        res.innerHTML += `<p>Somando os valores temos: ${soma}.</p>`
        res.innerHTML += `<p>Média total: ${media}.</p>`
    }
}