function flatten(arr){
    let flat=[]
    for(let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])==false) flat.push(arr[i])

        else flat=flat.concat(flatten(arr[i]))
    }
    return flat
}

// const arr=['a','b',['c','d',['e',['f','g']]]]

const arr=[1,2,[3,4,[5,[6,7]]]]

console.log(flatten(arr));
