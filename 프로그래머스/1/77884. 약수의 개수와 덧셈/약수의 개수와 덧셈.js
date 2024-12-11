function solution(left, right) {
    var answer = 0;
    var arr = [];
    var cnt = 0;
    var num = right - left + 1;
    for(i=0; i<num; i++){
        for(j=1; j<=left; j++){
            if(left % j === 0){
                cnt++;
            }
        }if(cnt % 2 ===0){
            answer +=left;
            cnt = 0;
        }else{
            answer -= left;
            cnt = 0;
        }
        left++;
    }

    return answer;
}