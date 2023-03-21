var longestSubarray = function(arr) {
    let ans=0,n=arr.length
    let i=0,j=0,count=0
    var zero=false
    while(j<n){
        if(arr[j]==0){
            count++
            zero=true
        }
        if(count<1){
            j++
        }
        else if(count==1){
            let l=(j-i+1)
            ans=Math.max(ans,l)
            j++
        }
        else{
            if(arr[i]==0)
                count--;
            i++;
            j++;
        }
    }
    if(zero==false)ans=n
    return ans-1;
};

const arr=[0,1,1,1,0,1,1,1,0,1,0,1,1]
console.log(longestSubarray(arr))