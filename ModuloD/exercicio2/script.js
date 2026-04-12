function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src' , 'bebe.jpg')
            }
            else if(idade < 13) {
                //Criança
                img.setAttribute('src' , 'mcrianca.jpg')
            }
            else if(idade < 21) {
                //Jovem
                img.setAttribute('src' , 'mjovem.jpg')
            }
            else if(idade < 50) {
                //Adulto
                img.setAttribute('src' , 'madulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src' , 'midoso.jpg')
            }
        } else if (fsex[1].checked){
            gênero = 'Feminino'
            if(idade >= 0 && idade < 5) {
                //bebe
                img.setAttribute('src' , 'bebe.jpg')
            }
            else if(idade < 13) {
                //Criança
                img.setAttribute('src' , 'fcrianca.jpg')
            }
            else if(idade < 21) {
                //Jovem
                img.setAttribute('src' , 'fjovem.jpg')
            }
            else if(idade < 50) {
                //Adulto
                img.setAttribute('src' , 'fadulto.jpg')
            }
            else{
                //idoso
                img.setAttribute('src' , 'fidosa.jpg')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)

    }
}