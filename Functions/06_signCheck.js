function signCheck(numOne, numTwo, numThree){

if( numOne < 0 && numTwo < 0 && numThree >= 0){
    return 'Positive';
} else if ( numOne < 0 && numTwo >= 0 && numThree < 0) {
    return 'Positive';
} else if ( numOne > 0 && numTwo < 0 && numThree < 0) {
    return 'Positive';
} else {
   return 'Negative'
}






}
console.log (signCheck(-5, -1, 1))