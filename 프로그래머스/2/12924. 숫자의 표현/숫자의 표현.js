function solution(n) {
    var answer = 0;
    var cnt = 0;
    for(i=1; i<=n; i++){
        for(j=0 + i; j<=n; j++){
            answer +=j 
            // console.log(j);
            if(answer === n){
                cnt ++;
                break;
            }else if(answer > n){
                break;
            }
        }
        answer = 0;
    }
    return cnt;
}