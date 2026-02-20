function solution(k, m, score) {
    let answer = 0
    // score내림차순 정렬 후
    const data = score.sort((a, b) => b-a)
    // m 개씩 나눔. 나머지는 버림.
    for(i=0; i<data.length +1; i++){
        if(i !==0 && i % m === 0){
            answer += data[i-1] *m
        }
    }
    return answer
    
    
}