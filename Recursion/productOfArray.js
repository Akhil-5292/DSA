// function prod(arr,i){
//     if(i==arr.length)return 1
//     return arr[i]*prod(arr,i+1)
// }
// const arr=[1,2,3,4]
// console.log(prod(arr))

function prod(arr){
    if(arr.length==0)return 1
    //recursion
    return arr[0]*prod(arr.splice(1))
}

const arr=[1,2,3,4]

console.log(prod(arr));