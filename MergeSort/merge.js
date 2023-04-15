function merge(arr1,arr2){
  let n=arr1.length
  let m=arr2.length
  let c=new Array(n+m)

  let i=0,j=0,k=0
  while(i<n && j<m){
    if(arr1[i]<arr2[j]){
        c[k]=arr1[i]
        i++
        k++
    }else{
        c[k]=arr2[j]
        j++
        k++
    }
  }
  while(i<n){
    c[k]=arr1[i]
    i++
    k++
  }

  while(j<m){
    c[k]=arr2[j]
    j++
    k++
  }
  return c
}

let arr1=[2,3,5,6]
let arr2=[1,4,7]

console.log(merge(arr1,arr2));
