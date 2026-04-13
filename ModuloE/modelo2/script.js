function tabuada() {
    let valor = window.document.getElementById('valor')
    let num = Number(valor.value)
    
    let txtTable = window.document.getElementById('title')
    let fulltable = window.document.getElementById('tablenum')

    if (num) {
        txtTable.innerHTML = "Sua tabuada:"
        fulltable.innerHTML = ''
        for (let index = 1; index <= 10; index++) {
            let calc = num * index
            let item = document.createElement('option')
            item.text += ` ${num} x ${index} = ${calc}`
            item.value =`tab${num}`
            fulltable.appendChild(item)
            
        }
        
    } else {
        window.alert('err')
    }
   
    
    
}
