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


//Fibonacci


