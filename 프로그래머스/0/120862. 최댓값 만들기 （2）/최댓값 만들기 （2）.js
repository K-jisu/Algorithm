function solution(numbers) {
    const num = numbers.sort((a, b)=> a-b)
    return num[0] * num[1] > num[numbers.length-2] * num[numbers.length-1] ? num[0] * num[1] : num[numbers.length-2] * num[numbers.length-1]
    
}