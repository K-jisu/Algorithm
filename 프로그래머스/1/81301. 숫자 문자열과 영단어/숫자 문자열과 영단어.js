function solution(s) {
    var answer = "";
    var word = ""
    // 매핑 테이블
    var table = {
        zero : "0",
        one : "1",
        two : "2",
        three : "3",
        four : "4",
        five : "5",
        six : "6",
        seven : "7",
        eight : "8",
        nine : "9",
    }
    // 문자열 돌면서 매핑테이블과 일치하는지 비교
    for(char of s){
        if(isNaN(char)){
            // console.log(char)
            word += char;
            if(table[word]){
                answer += table[word]
                word = "";
            }
        }else{
            answer += char;
        }
    }
    return +answer;
}