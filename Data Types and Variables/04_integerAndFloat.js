function integerAndFloat(numOne, numTwo, numThree) {


    let sum = numOne + numTwo + numThree;
    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`)
    } else {
        console.log(`${sum} - Float`)
    }

}
integerAndFloat(9, 100, 1.1)
integerAndFloat(100, 200, 303)
