function divideNumber(num) {        
    let sum = 0;

    for(let i = 1; i < num; i++) {
        if (num % i === 0) {
            sum += i; 
        }
    } 
    
    if (sum === num) {
        return true;
    }
    
    return false;            
}; 
console.log( divideNumber(444));