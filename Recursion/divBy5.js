function div(arr){
    if(arr.length==0)return 0

    else{
        let x=arr.pop()
        if(x%5==0)return 'YES'
        else return 'NO'
    }
}

const arr=[2,4,12,16,21]

console.log(div(arr));