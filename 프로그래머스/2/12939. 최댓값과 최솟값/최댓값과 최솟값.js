function solution(s) {
    var answer = '';
    var arr = s.split(" ").sort((a, b) => a-b);
    var newarr = arr.splice(1, arr.length-2)
    console.log(newarr)
    return arr.join(" ");
}