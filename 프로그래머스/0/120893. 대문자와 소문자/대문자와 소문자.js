function solution(my_string) {
    var answer = '';
    for(i=0; i<my_string.length; i++){
        if(/[a-z]/.test(my_string[i])){
            answer += my_string[i].toUpperCase()
        }else{
            answer += my_string[i].toLowerCase()
        }
    }
    return answer;
}