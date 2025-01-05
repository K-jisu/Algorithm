function solution(numbers) {
    var answer = [];
    var sum = 0;
    for(i=0; i < numbers.length; i++){
        for(j =i+1; j < numbers.length ; j++){
            sum = numbers[i] + numbers[j];
            if(!answer.includes(sum)){
                answer.push(sum)
            }
        }
    }
    return answer.sort((a, b) => a-b);
}