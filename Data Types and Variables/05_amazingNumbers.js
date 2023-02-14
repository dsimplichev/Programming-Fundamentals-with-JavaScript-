function amazingNumbers(num) {

     num = num.toString()
    let sum = 0
    for (let i = 0; i < num.lenght; i++) {
        sum += Number(num[i])
        
    }
  

    result = sum.toString().includes(9)
    if(num.includes(9)){
      console.log(`${num} Amazing? False`)
    } else {
        console.log(`${num} Amazing? True`)
    }


}
amazingNumbers(999)