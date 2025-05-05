function solution(cards1, cards2, goal) {
    let answer = "";
    let cnt = goal.length
    goal.forEach((item) =>{
        if(item === cards1[0]){
            cards1.splice(0,1)
            cnt += -1
        }else if(item === cards2[0]){
            cards2.splice(0,1)
            cnt += -1
        }else{
            return;
        }
    })
    answer = cnt === 0 ? "Yes" : "No";
    return answer;
}