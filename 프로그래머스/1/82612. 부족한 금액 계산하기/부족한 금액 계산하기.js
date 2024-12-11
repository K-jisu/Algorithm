function solution(price, money, count) {
    var answer = 0;
    for(i=1; i<=count ; i++){
        answer += price * i
    }
    if(money >= answer){
        return 0;
    }else{
        return answer - money;
    }

}