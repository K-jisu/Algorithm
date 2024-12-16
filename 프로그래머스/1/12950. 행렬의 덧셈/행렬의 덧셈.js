function solution(arr1, arr2) {
    var answer = [];
    var sum = [];
    for(i=0; i< arr1.length; i++){
        for(j=0; j< arr1[i].length; j++){
            sum.push(arr1[i][j] + arr2[i][j])
            // console.log(sum);
        }
        answer.push(sum);
        sum = [];
        // console.log(answer);
    }
    
    return answer;
}