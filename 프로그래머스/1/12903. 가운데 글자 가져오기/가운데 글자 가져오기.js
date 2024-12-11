function solution(s) {
    var answer = '';
    var num = Math.round(s.length/2)
    if(s.length % 2 === 0){
        answer = s[num-1]+s[num]
    }else{
        answer = s[num-1]
    }
    return answer;
}