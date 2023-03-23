function sum(n){
    if(n==0)return 0

    //recursion
    return n%10+sum(Math.floor(n/10))
}

const n=12345

console.log(sum(n));