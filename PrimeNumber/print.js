function isPrime(n){
    let check=true

    for(let i=2; i*i<=n; i++){
        if(n%i==0){
            check=false
            break
        }
    }
    if(n==1){
        return false;
    }else if(check){
        return true 
    }else{
        return false
    }
}

let n=50;

let arr=[]

for(let i=2; i<=n; i++){//O(N)
  if(isPrime(i)){//O(sqrt(N)
    arr.push(i)
  }
}

console.log(arr);//O(N*sqrt(N))