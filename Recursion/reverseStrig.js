function reverse(str){
    if(str.length<=1)return str //base

    return reverse(str.slice(1)) + str[0]  //recursion
}

const str='hello'

console.log(reverse(str))