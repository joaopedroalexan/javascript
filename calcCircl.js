// Criando e definindo uma constante
const PI = 3.14159

var radius= 5

// 

function calculateArea(radius){
    //definindo uma variavel com let
    let area
    area = PI * radius * radius
    return area
}

var calculatedArea = calculateArea(radius)

console.log("O radio é igual a: "+radius)
console.log("a area do circulo é:",calculatedArea)
