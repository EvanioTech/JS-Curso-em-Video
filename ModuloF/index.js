let aluno1 = []
aluno1.push(1)
aluno1.push(9)
aluno1.push(8)
aluno1.push(7)
aluno1.push(6)
aluno1.push(5)
aluno1.push(4)

console.log(aluno1)

aluno1.sort()
console.log(aluno1)

for (let index = 0; index < aluno1.length; index++) {
    console.log( 'a posição ' + index + ' tem o valor de ' +aluno1[index])
    
}

for( let i in aluno1) {
    console.log( 'a posição ' + i + ' tem o valor de ' +aluno1[i])
}

let pos = aluno1.indexOf(9)
console.log(pos)


let amigo = {nome: 'matias',
    sexo: 'M',
    peso: 101.5,
    engordar(p=0){
        console.log('Engordou')
        this.peso += p
    }
    
}
amigo.engordar(10)
console.log(` O ${amigo.nome} pesa ${amigo.peso}Kg `)