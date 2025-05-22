function solution(number, limit, power) {
    // 총 철의 무게
    var answer = 0;
    // for문으로 number의 index 약수로 변환
    // 약수 개수가 limit 넘으면 power로 
    // 약수 구하는 법 : 해당하는 number를 1부터 number까지 돌리면서 나머지가 없는 수
    for(let i = 1; i <= number; i++){
        let divisor = 0;
        for(let j = 1; j <= Math.sqrt(i) ; j++){
            if(i % j === 0){
                    divisor += (j === i / j) ? 1 : 2; // 제곱근이면 한 번만 더함
            }
        }
        console.log(divisor)
        if(divisor > limit){
            answer += power
        }else{
            answer += divisor
        }
        
    }
    return answer;
}