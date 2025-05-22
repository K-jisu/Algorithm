function solution(a, b, n) {
    // 총 얻은 콜라 개수
    let answer = 0;
    
    // 빈병이 a 보다 크면 loop
    while (n >= a) {
        // 교환 콜라
        const exchanged = Math.floor(n / a) * b;
        // 교환한 콜라 누적
        answer += exchanged;
        // 빈병 = 나머지 + 교환한 콜라
        n = (n % a) + exchanged;
    }

    return answer;
}