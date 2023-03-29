function check(n){
    if(n%3==0 && n%5==0){
        console.log('FooBar'); 
    
    }else if(n%5==0){
        console.log('Bar');
    }else if(n%3==0){
        console.log('Foo');
    }else{
        console.log(false); 
    }
}

let n=15
check(n);