function insertionSort(arr){
    for(let i=1; i<arr.length; i++){
        let currVal=arr[i]
        let j

        for(let j=i-1; j>=0 && arr[j]>currVal; j--){
            arr[j+1]=arr[j]
        }
         arr[j+1]=currVal
    }
    return arr
}

let arr=[2,1,3,7,5]
console.log(insertionSort(arr));