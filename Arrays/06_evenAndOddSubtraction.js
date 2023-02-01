function evenAndOdd(arr){

     let sumOdd = 0;
     let sumEven = 0;
    

    for(let i = 0; i < arr.length;i++){
        arr[i] = Number(arr[i])
    }

    for(let num of arr){
        if(num % 2 == 0 ){
            sumEven += num
        } else {
            sumOdd += num
        }
    }

       console.log(sumEven - sumOdd)



}
evenAndOdd([1,2,3,4,5,6])
evenAndOdd([3,5,7,9])
evenAndOdd([2,4,6,8,10])