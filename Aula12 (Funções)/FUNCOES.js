// funcoes sao disparadas pelas chamadas, podem usar ou nao parametros, 
// executam acoes e podem ter retorno

function parimp(num){
    if(num%2==0){
        return 'par'
    }
    else{
        return 'impar'
    }
}

let res = parimp(11)
console.log(res)

// vc tbm pode guardar funcoes dentro de variaveis no JS

let soma5 = function(n){
    return n + 5
}
console.log(`Somando 5 na variavel usando a resposta de cima (11): ${soma5(11)}`)