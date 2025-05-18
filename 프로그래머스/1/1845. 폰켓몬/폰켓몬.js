function solution(nums) {
    var newArr = [...new Set(nums) ].length
    var max = nums.length/2
    var answer = newArr > max ? max : newArr
    return answer;
}