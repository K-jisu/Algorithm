function solution(x) {
    var arr = (x + "").split("").map(Number);
    var answer = 0

    for(let i = 0; i < arr.length; i++){
        answer += arr[i]
    }
    return x % answer === 0 ? true : false
}