function solution(my_string, k) {
    var answer = [];
    const array = [...my_string]
    for(let i=0; i<k; i++){
        for(let j=0; j<array.length; j++){
            answer.push(array[j])
        }
    }
    return answer.join("");
}