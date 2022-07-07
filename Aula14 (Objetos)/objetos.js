// isso é um objeto, e ele nao tem indices, ele tem esses nomes
// vc pode simplesmente adicionar funcoes dentro de variaveis.
let amigo = {
    nome:'Guanabara', 
    sexo:'M', 
    peso:84.5, 
        engordar(p=0){ // se nao passar, é zero
            this.peso += p // famoso orientado a objeto
            console.log('Engordou')
        }
}

console.log(typeof amigo)
console.log(`${amigo.nome} esta pesando: ${amigo.peso}kgs`)