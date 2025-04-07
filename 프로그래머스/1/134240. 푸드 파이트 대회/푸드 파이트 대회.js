function solution(food) {
    let arr = [];
    for(let i = 1; i < food.length ; i++){
        for(let j = 1; j <= food[i]/2; j++){
            arr.push(i)
        }
    }
    arr.push(0);
    for(let i = food.length-1; i >= 1; i--){
        for(let j = 1; j<= food[i]/2; j++){
            arr.push(i)
        }
    }
    return arr.join("");
}