function solution(s1, s2) {
    var answer = 0;
    var cnt = 0;
    s1.filter((item) => {
        for(i=0; i<s2.length; i++){
            if(item === s2[i]){
                cnt++
            }
    }
    })

    return cnt
}