function solution(array) {
    var answer = [];
    const sortedArray = [...array].sort((a, b)=>b-a)
    const index = array.indexOf(sortedArray[0])
    answer.push(sortedArray[0], index)
    return answer;
}