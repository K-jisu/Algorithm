function solution(array, commands) {
    var answer = [];
    var num1 = []
    // 배열 자르고 정렬
    for(i=0; i< commands.length; i++){
        num1 = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a-b)
        // console.log(num1)
            // 정렬한 배열에서 K번째 수 추출
        if(commands[i][2] === 1){
            answer.push(num1[0])
        }
        else{answer.push(num1[commands[i][2]-1])}
        
    }
    // console.log(answer)

    return answer;
}