// definindo limite
const limit = 20

console.log('exibindo os numeros primos até: ',limit)
for(let i=2; i<=limit; i++){

    if(primos(i)){
        console.log(i)
    }
}

// criando uma função para verificar se um numero é primo ou não
function primos(num){
    for(let i=2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false
        }
    
    }
    return true
}