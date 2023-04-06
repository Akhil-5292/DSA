function reverse(sentence){
    if(sentence.length==0)return

    return reverse(sentence.slice(1)) + sentence[0]
}

function reverseSen(sentence){
    let sentence=sentence.split(' ')
    for(let i=0; i<sentence.length; i++){
        sentence[i]=reverse(sentence[i])
    }
    return sentence.join(' ')
}

let sentence='hi to all'
console.log(reverseSen(sentence));