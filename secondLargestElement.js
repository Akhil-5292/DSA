function SecondLargest(n,val){
    //size of array should be greater than 1
  if(n<2){
    console.log('Inavlid input')
  }
    let count={}
    for(let i=0;i<n;i++){
      if(val[i] in count){
        count[val[i]]= ++count[val[i]]||1
      }else{
        count[val[i]] =1
      }
    }
    if(count.length ==1){
      console.log('No second largest element exist')
        return;
    }
    let keys = Object.keys(count)
    console.info(count)
    console.info(keys)
    console.log(keys[keys.length-2])
  }
  let val = [-1,-2,0,1,2]