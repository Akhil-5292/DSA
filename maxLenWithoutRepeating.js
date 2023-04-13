function maxLen(){
    if(!str)return false
    let i=0
    let j=0
    let len=0
    let map=new Map()
    for(let i=0; i<str.length; i++){
        map.set(str[i],(map.get(str[i])||0)+1)
    }   

    if(map.has(str[i])){}
}