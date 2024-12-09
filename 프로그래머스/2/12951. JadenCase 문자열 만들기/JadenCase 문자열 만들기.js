function solution(s) {
    var answer = '';
    var arr = s.split(" ")
    var result = arr.map(item => item.charAt(0).toUpperCase()+item.slice(1).toLowerCase()).join(" ")
    return result
}