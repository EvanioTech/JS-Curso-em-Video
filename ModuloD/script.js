

function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let agoraNow = new Date()
    let hora = agoraNow.getHours()
    console.log(hora)

    msg.innerHTML = `Agora são ${hora} Horas.`
    if(hora >= 0 && hora <12) {
        img.src = 'manha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.background = '#fe9d28'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#192740'
    }


}
