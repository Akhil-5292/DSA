nums = [-2,1,-3,4,-1,2,1,-5,4,10]
function maximumSubarry(nums){
    let min=0;
    let max=0
    for(let i=0; i<nums.length; i++){
    //   min= Math.max(min, min+nums[i])
        min=min+nums[i]
        max=Math.max(min,max)
        if(min<0){
            min=0
        }
        
    }
return max 
}
console.log(maximumSubarry(nums))