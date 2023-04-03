// function searchInsert(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }

//     return left;
// }

// let nums=[2,5,4,9,7,6,3]
// let target =4

// console.log(searchInsert(nums,target));


let arr1=[1,3,7,9,12,17,22,30,45]
let n=46
let x=9

function binary(l,r){
//base case
if(l>r){
 console.log(x,"is not present")
 return
//recusive case

}
let m=parseInt((l+r)/2)
if(x==arr1[m]){
 console.log(x,"is present")
 return
  
}else if(x>arr1[m]){
  binary(m+1,r)
}else{
  binary(l,m-1)
}
}
let l=0
let r=arr1.length-1


binary(l,r)