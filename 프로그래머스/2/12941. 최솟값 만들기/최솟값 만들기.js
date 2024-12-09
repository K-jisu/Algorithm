function solution(A,B){
    var answer = 0;
    var Aa = A.sort((a, b) => a-b)
    var Bb = B.sort((a, b) => a-b)
    for(i=0; i < A.length; i++){
        answer += Aa[i] * Bb[A.length -1 -i]
    }


    return answer;
}