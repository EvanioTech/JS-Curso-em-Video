



function contador() {
    let init = window.document.getElementById('valori')
let fim = window.document.getElementById('valorf')
let soma = window.document.getElementById('s')
let res = window.document.getElementById('res')

let inicio = Number(init.value)
let parou = Number(fim.value)
let s = Number(soma.value)

if (!(inicio == '' || parou == '' || s == '')){
    res.innerHTML = 'Contando: '
    for (let i = inicio; i <= parou; i += s) {
    
    res.innerHTML += ` ${i} \u{1f449}`
    
    
}

res.innerHTML  += ` \u{1f3c1}`
} else {
    window.alert('err')
}


    
}
