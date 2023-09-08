let num = [5, 3, 6, 8, 9]
num.push(1)
num.sort()
console.log(num)
console.log(`Nosso vetor tem ${num.length} posições`) 
console.log (`O primeiro valor é ${num[0]}`)

let pos = num.indexOf(5)
if(pos == -1) {
    console.log(`O valor não foi encontrado`)
} else {
    console.log(`O valor esta na posição ${pos}`)
}
