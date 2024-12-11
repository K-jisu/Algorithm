function solution(n) {
    var answer = "";
    var su = "수";
    var bak = "박";
    
    for(i=0; i<n; i++){
        i%2===0 ? answer +=su: answer +=bak;
    }
    return answer;
}