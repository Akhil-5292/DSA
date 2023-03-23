function ispalindrome(str){
    str=str.toLowerCase()
    if(str.length<=1) return true

    if(str[0]==str.slice(-1))return ispalindrome(str.slice(1,-1))
    else return false
}

const str='level'

console.log(ispalindrome(str));
