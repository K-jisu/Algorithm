function solution(strings, n) {
    var answer = [];
    for(i=0; i<strings.length; i++){
        strings[i] = strings[i][n] + strings[i]
    }
    strings.sort()
    console.log(strings);
    for(j=0; j<strings.length; j++){
        strings[j] = strings[j].replace(strings[j][0], "")
        answer.push(strings[j])
    }
    return answer;
}