function Pairs(arr,k){
    let count=0;
    let map=new Map();
    
    for(i=0;i<arr.length;i++){      
        let dif=k-arr[i]
        if(map.has(dif))
        count+=map.get(dif)
        
        if(map.has(arr[i])){
        map.set(arr[i],map.get(arr[i])+1)
    }
    else{
        map.set(arr[i],1)
    }
    
}
return count
}
console.log(Pairs([1,2,3,2,-6],3))