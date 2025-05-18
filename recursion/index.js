// sum of n nautural numbers

function sum(n){
    if(n===1) return n
    return n + sum(n-1)
}

console.log(sum(5))

// factorial of a number

function factorial(n){
    if(n===1) return n
    return n*factorial(n-1)
}

console.log(factorial(5))

// fibonacci series

function fibonacci(n){
    if(n===1 || n===2) return 1
    return fibonacci(n-1) + fibonacci(n-2)
}

console.log(fibonacci(10))