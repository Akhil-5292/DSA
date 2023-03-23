function fib(n){
    if(n==0 || n==1)return n

    //recursion
    return fib(n-1)+fib(n-2)
}




console.log(fib(8))