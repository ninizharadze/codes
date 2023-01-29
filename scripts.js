//Factoorial

function getFactorial(n){
    if(n===1){
        return 1;
    }else{
        return n * getFactorial(n-1);
    }
}

let result = getFactorial(5);
console.log(result);


//getFactorial(1); 1
//getFactorial(2); 2
//getFactorial(3); 6
//getFactorial(4); 24
//getFactorial(5); 120

//Fibonacci

function getFibonacci(n){
    if (n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }else{
        return getFibonacci(n-1) + getFibonacci(n-2);
    }
}

let result2 = getFibonacci(8);
console.log(result2);

// getFibonacci(2) = getFibonacci(1) + getFibonacci(0); 1 + 0 = 1
// getFibonacci(3) = getFibonacci(2) + getFibonacci(1); 1 + 1 = 2
// getFibonacci(4) = getFibonacci(3) + getFibonacci(2); 2 + 1 = 3
// getFibonacci(5) = getFibonacci(4) + getFibonacci(3); 3 + 2 = 5
// getFibonacci(6) = getFibonacci(5) + getFibonacci(4); 5 + 3 = 8
// getFibonacci(7) = getFibonacci(6) + getFibonacci(5); 8 + 5 = 13
// getFibonacci(8) = getFibonacci(7) + getFibonacci(6); 13 + 8 = 21






