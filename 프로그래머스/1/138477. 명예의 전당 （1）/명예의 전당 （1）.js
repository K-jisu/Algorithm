function solution(k, score) {
    var answer = [];
    const array = []
    // score를 돌음
    // 각 인덱스를 array에 넣음
    // array에 들어간 요소중 가장 작은 수를 answer에 넣음
    // array가 k개 되면 0번 인덱스 제거 후 i push
    // 근데 i 가 array 요소들보다 커야지 push
    score.map((i)=>{
        array.push(i)    
        if(array.length > k){
            if(array[k] < array[0]){
                array.splice(k, 1)
            }else{
                array.splice(0,1)    
            }
        }
        array.sort((a, b)=>a-b)
        answer.push(array[0])
    })
    return answer;
}