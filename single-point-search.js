function singlePointSearch(nums, target){
    pointer = nums[parseInt(nums.length/2)]
    count=0
    while(pointer != target){
        if(count>nums.length){
            break
        }
        console.log(count,pointer)
        if(target>pointer){
            pointer = (pointer+1) + parseInt((target-pointer)/2)
        }
        else{
            pointer = (pointer-1) - parseInt((pointer-target)/2)
        }
        count++
    }
    console.log(nums.indexOf(pointer))
    return pointer
}

console.log(singlePointSearch([1,2,3,4,5,6,7,8,9,11,10,12,13,14,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40],15))
console.log(singlePointSearch([2,4,6,8,10,12],5))