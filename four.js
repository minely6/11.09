function square (a, b = a) {
    if ( a >= 0 && b >= 0 ) {
        return a * b;
    } 

    return 'Error. Enter positive numbers';
}
