function solution(s) {
    var answer = [];
    var arr = []
    for(i = 0; i< s.length; i++){
        if(!arr.includes(s[i])){
            arr.push(s[i]);
            answer.push(-1)
        }else{
            answer.push(arr.length - arr.lastIndexOf(s[i]))
            arr.push(s[i])
        }
    }
    return answer;
}