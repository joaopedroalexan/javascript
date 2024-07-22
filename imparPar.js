const num1 = -8
const num2 = 0
const num3 = Math.sqrt(38)

function parImpar(num){
    if(num%2 === 0){
        return "par"
    }
    else{
        return "impar"
    }
}

console.log("O numero 1 é: ",parImpar(num1))
console.log("O numero 2 é: ", parImpar(num2))
console.log("O numero 3 é: ",parImpar(num3))