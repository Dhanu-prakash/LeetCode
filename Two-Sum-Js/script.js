var twoSum = function(nums, target) {
let map = {};
for(let i=0;i<nums.length;i++){
    let compliment = target - nums[i];
    if (compliment in map){
        return [map[compliment],i]; //gives indices
    }

    map[nums[i]] = i;
}
}

console.log(twoSum([1,5,6,7,8,1],9));
