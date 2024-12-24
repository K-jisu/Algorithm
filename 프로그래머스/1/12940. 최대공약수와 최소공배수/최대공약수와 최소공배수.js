function solution(n, m) {
    var answer = [];
    var r = 0;
    var a = n * m;
    while(m != 0){
        r = n % m;
        n = m;
        m =r;
    }
    answer.push(n)
    answer.push(a / n)
    return answer;
}