function getFactorial(number){
    return number === 0 ? 1 : number * getFactorial
    (number-1);
}
console.log(gerFactorial(5))