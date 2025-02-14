function findmin(nums){
    let L = 0;
    let R = nums.length-1;

    while(L<R){
        let mid = Math.floor((L+R/2));
        if(nums[R]<nums[mid]){
            L=mid+1;//If we found that R(Side is lower than L Side)
        }
        else{
            R=mid;//Right side is lower than left 
        }
    }
    return nums[left];
}

console.log(findmin([3,4,5,1,2]));