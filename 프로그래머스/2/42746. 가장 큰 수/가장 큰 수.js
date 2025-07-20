function solution(numbers) {
    // var answer = '';
    // 일단 정렬은 맞는듯.
    // a-b 오름차순
    const answer = numbers.map((item)=>String(item)).sort((a, b)=>(b+a) - (a+b)).join("")
    // console.log(answer)
    return answer[0] === "0" ? "0" : answer
    
                // 6과 10 
                // 610, 106 610이 큼 => 6, 10
                // 10과 2
                // 102, 210 210이 큼 => 2, 10
                // 따라서 6 2 10
    // 오름차순, 내림차순 ㄴㄴ
    // 6, 10, 2 =  [6102, 6210, 1062, 1026, 2610, 2106]
}