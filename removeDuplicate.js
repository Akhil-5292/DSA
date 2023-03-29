function remove(arr){
  let map=new Map()
  for(let i=0; i<arr.length; i++){
    map.set(arr[i],(map.get(arr[i])||0)+1)
  }

  let res=[]
  for(let pair of map){
    if(pair[1]==1){
       res.push(pair[0])
    }
  }
  return res
}

let arr=[1,1,2,22,3,5,11,21,2]
console.log(remove(arr));