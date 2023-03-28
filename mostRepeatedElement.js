function maxFreq(arr){
  let map=new Map()
  for(let i=0;i<arr.length; i++){
     map.set(arr[i],(map.get(arr[i])||0)+1)
  }
   let max=Math.max(...map.values())
   for(let pair of map){
    if(pair[1]==max){
        return pair[0]
    }
   }
}

let arr=[1,2,3,4,8,9,6,6,7,6,2,6,4,6]

console.log(maxFreq(arr));