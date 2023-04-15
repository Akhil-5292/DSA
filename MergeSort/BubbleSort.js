function bubble(arr){
    for(let i=0; i<arr.length; i++){
        let swap=false
        for(let j=0; j<arr.length-1; j++){
            if(arr[j]>arr[j+1]){
                arr[j]=arr[j]+arr[j+1]
                arr[j+1]=arr[j]-arr[j+1]
                arr[j]=arr[j]-arr[j+1]
                swap=true
            }
        }
        if(swap!==true)break
    }
    return arr
}

let arr=[12,6,23,8,90]
console.log(bubble(arr));