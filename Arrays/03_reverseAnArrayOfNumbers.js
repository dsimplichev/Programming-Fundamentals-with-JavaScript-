function reverseAnArrayOfNumber(n, arr) {

    let newArr = [];

    for (let i = n - 1; i >= 0; i--) {
        const element = arr[i];
        newArr.push(element)

    }
    console.log(newArr.join(' '))






}
reverseAnArrayOfNumber(3, [10, 20, 30, 40, 50])