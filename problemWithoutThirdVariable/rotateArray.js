function reverse(arr,i,j){

  
        arr[i]=arr[i]+arr[j]
        arr[j]=arr[i]-arr[j]
        arr[i]=arr[i]-arr[j]
        i++
        j--
    
  
   console.log(arr);
}
let arr=[2,5,6,8,10,9]
let k=2
 reverse(arr,0,arr.length-1)
  reverse(arr,0,k-1)
reverse(arr,k,arr.length-1)
// console.log(arr);