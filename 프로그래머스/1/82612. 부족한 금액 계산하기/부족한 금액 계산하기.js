function solution(price, money, count) {
    var answer = 0;
    for(i=1; i<=count ; i++){
        answer += price * i
    }
    return money >= answer ? 0 : answer - money;
}