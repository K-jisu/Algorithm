function solution(s) {
    var answer = '';
    var arr = [...s]
    
    return answer = arr.sort((a, b)=> a >b ? -1 : 1).join("");
}