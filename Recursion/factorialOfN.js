function factorialOfN(n){
    //base case
    
    if(n==1)return 1
    
    //recursion
    return n * factorialOfN(n-1) 
}

const n=4

console.log(factorialOfN(n));