function pow(a,b){
    if(b==0)return 1
    //recursion
    return a*pow(a,b-1)
}

console.log(pow(2,3));