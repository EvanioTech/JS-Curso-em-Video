let conjunto = []
let val = window.document.getElementById('valor')
let fulltable = window.document.getElementById('tablenum')
let res = window.document.getElementById('res')
    
     
    

    

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n , l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        false
    }
}
function adicionar() {
    
    if(isNumero(val.value) && !inLista(val.value, conjunto)) {
       conjunto.push(Number(val.value))
       let item = document.createElement('option')
       item.text += `Valor ${val.value} adicionado.`
            item.value =`tab${val.value}`
            fulltable.appendChild(item)
    } else{
        window.alert('Valor inválido ou já encontrado na lista.')
    }
   val.value = ''
   val.focus()
    
}

function finalizar() {
    if (conjunto.length == 0) {
        window.alert('Adicione valores antes de finalizar')
    } else {
        let tot = conjunto.length
        let maior = conjunto[0]
        let menor = conjunto[0]
        let soma = 0
        let media = 0

        for (let pos in conjunto) {
            soma += conjunto[pos]
            if(conjunto[pos] > maior) {
                maior = conjunto[pos]
            }
            if (conjunto[pos] < menor) {
                menor = conjunto[pos]
            }
        }
        media = soma / tot

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados. </p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
    }
}