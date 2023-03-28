function swap(x,y){
    x=x.concat(y)
    console.log(x)
    y=x.slice(0,x.length-y.length)
    console.log(y)
    x=x.slice(y.length)
    console.log(x,y)
}
let x='Something'
let y='Good'





