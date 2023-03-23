var longestBeautifulSubstring = function(word) {
    var ans=0,n=word.length,count=1,len=1
    for(let i=1;i<n;i++){
        if(word[i-1]<=word[i]){//true
            len++;
            if(word[i-1]!=word[i]){
                count++
            }
        }
        else{
            count=1
            len=1
        }
        if(count==5){
            ans=Math.max(ans,len)
        }
    }
    return ans;
};

const word='aeiaaioaaaaeiiiiouuuooaauuaeiu'
console.log(longestBeautifulSubstring(word))