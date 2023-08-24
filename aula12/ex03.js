var agora = new Date()
var diasem = agora.getDay()
/*
0 = Domingo
1 = Segunda
2 = Terca feira
3 = quarta
4 = quinta
5 = sexta
6 = sabado*/

switch(diasem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda Feira')
        break
    case 2:
        console.log('Terça-feira')   
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')  
        break
    case 5:
        console.log('Sexta-feira') 
        break
    case 6:
        console.log('sábado') 
        break
    default:
        console.log('[ERRO] Dia inválido!')
        break
          

}