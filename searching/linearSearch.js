let arr=[1,2,5,4,8,6,9]
let x=8
let ans=-1

 
  for(let i=0; i<arr.length; i++){
    if(arr[i]==x){
        ans=i
    }
  }
  if(ans!=-1){
    console.log(x ,'is present')
  }else{
    console.log(x, 'is not present')
  }
  


