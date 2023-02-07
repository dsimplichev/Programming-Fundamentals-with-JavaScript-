function simpleCalculator(firstNumber, secondNumber, operator){

const operators = {

    'multiply': (a, b) => {
        return a * b;
    },
    'divide': (a, b) => {
        return a / b;
    },
    'add': (a, b) => {
        return a + b;
    },
    'subtract': (a, b) => {
        return a - b;
    },


    
}
let result = operators[operator](firstNumber, secondNumber)
console.log(result)




}
simpleCalculator(12, 19,'add')

