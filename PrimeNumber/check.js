let n=15
let check =true

for(let i=2; i<n; i++){//for(let i=0; i<=Math.sqrt(n) || i*i<=n;i++)
    if(n%i==0){
        check=false
        break
    }
}

if(check){
    console.log('prime');
}else{
    console.log('not prime');
}fdf