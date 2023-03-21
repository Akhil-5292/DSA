function sumOfN(n){
    //base case
    if(n==0) return 0
    if(n==1) return 1
    //recursion
    return n+sumOfN(n-1)
}

const n=5

console.log(sumOfN(n));