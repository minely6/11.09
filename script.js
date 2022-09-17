
 function func(a = 0, b = 0) {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    } 
    return 0;
}
console.log( func(4, 6) );  
console.log( func(10, 2) );  

// b)
function func(a = 0, b = 0) {
    return (a < b) ? -1 : (a > b) ? 1 : 0;
}

console.log( func(2, 5) );  
console.log( func(8, 5) );  
console.log( func(5, 5) );  