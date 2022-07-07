let num = [7,5,3]
// um array é um vetor composto por elementos, que sao identificados pelos indices.

num.sort() // organiza os elementos em ordem crescente
num[3] = 9 // adicionando pelo indice
num.push(15) // adicionando no ultimo indice automaticamente
console.log(`Vetor: ${num}`)
console.log(`Tamanho do vetor: ${num.length}`)

// brincando

console.log()
// tradicional
for(let pos=0;pos<num.length;pos++){
    console.log(`Contagem em Est. Repetição: ${num[pos]}`)
}

console.log()
// simplificado e moderno
for(let pos in num){
    console.log(`Do jeito moderno: ${num[pos]}`)
}

console.log()
// buscando valores em arrays
console.log(num.indexOf(7)) // me fale qual indice esta guardando o valor 7