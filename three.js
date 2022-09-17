function nums (a, b, c) {
    if (a >= 0 && b >= 0 && c >= 0) {
        return Number( `${a}${b}${c}` );
    }
    return 'Error';
}

console.log(nums(2, 5, 4)); 
