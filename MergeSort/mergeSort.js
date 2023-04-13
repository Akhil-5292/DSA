function merge(arr,l,m,r){

    let n1=m-l+1
    let n2=r-m

    let L=new Array(n1)
    let R=new Array(n2)

    for(let i=0; i<n1;i++){
        L[i]=arr[l+i]
    }

    for(let j=0;j<n2;j++){
        R[j]=arr[m+1+j]
    }

    let i=0,j=0,k=l

    while(i<n1 && j<n2){
        if(L[i]<=R[j]){
            arr[k]=L[i]
            i++
        }else{
            arr[k]=R[j]
            j++
        }
        k++
    }

    while(i<n1){
        arr[k]=L[i]
        i++
        k++
    }

    while(j<n2){
        arr[k]=R[j]
        j++
        k++
    }
}

function mergeSort(arr,l,r){
   if(l==r)return

   let m=Math.floor((l+r)/2)
   mergeSort(arr,l,m)
   mergeSort(arr,m+1,r)
   merge(arr,l,m,r)
}

let arr=[4,5,6,8,2,1,3]
let l=0
let r=arr.length-1
console.log(mergeSort(arr,l,r));