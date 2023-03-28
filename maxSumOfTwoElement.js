function maxSum(arr){
 let first=0
 let second=0
 for(let i=0; i<arr.length; i++){
    if(arr[i]>first){
        second=first
        first=arr[i]
        i++
    }else if(arr[i]>second){
        second=arr[i]
    }else{
        i++
    }
 }
 return first+second
}

let arr=[12,4,67,2,32]

console.log(maxSum(arr));