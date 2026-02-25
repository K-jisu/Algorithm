function solution(num_list) {
    const answer = [...num_list]
    const lastIndex = num_list[num_list.length-1]
    const prevLastIndex = num_list[num_list.length-2] 
    const num = lastIndex > prevLastIndex ? lastIndex - prevLastIndex : lastIndex * 2
    return [...answer, num]
}