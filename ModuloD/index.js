let cliente = "Amélia"
let age = 13

if (age >= 18) {
     console.log(`A cliente ${cliente} pode comprar o que quiser.`)
}
else if (age <=12){
   console.log(`Esta Cliente ${cliente} é uma criança e precisa estar acompanhada`) 
}
else{
    console.log(`A cliente ${cliente} pode comprar quase tudo  que quiser.`)
}

let horaNow = new Date()

let hora = horaNow.getHours()
let minuto = horaNow.getMinutes()



if (hora < 12) {
   console.log('Bom dia')
}
else if (hora < 18) {
   console.log('Boa tarde')
}
else if (hora <= 23 && minuto <= 59) {
   console.log('Boa noite')
}

let dia = new Date()
let diaSem = dia.getDay()
console.log(diaSem)


switch (diaSem) {
   case 0:
      console.log('Hoje é domingo!!!')
      break;
   case 1:
      console.log('Hoje é Segunda!!!')
      break;
   case 2:
      console.log('Hoje é Terça!!!')
      break;
   case 3:
      console.log('Hoje é Quarta!!!')
      break;
   case 4:
      console.log('Hoje é Quinta!!!')
      break;
   case 5:
      console.log('Hoje é Sexta!!!')
      break;
   case 6:
      console.log('Hoje é Sábado!!!')
      break;
   default:
      break;
}