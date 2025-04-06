function solution(array, height) {
    array.push(height)
    return array.sort((a, b)=>a-b).filter((i)=>i > height).length;
}