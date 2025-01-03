function solution(s, n) {
    var answer = '';
    var arr = [...s];
    var ascii = [];
    var ascii2 = [];
    // 각 자리를 아스키코드로 반환
    // 각 자리에 n만큼 아스키코드 +
    arr.map((item)=> {
        return ascii.push(item.charCodeAt())});
    ascii.map((item)=>{
        if(65 <= item && item <= 90){
            var upper = item + n;
            if(upper > 90){
                var tmp1 = upper - 90 + 64
                ascii2.push(String.fromCharCode(tmp1))
            }else{
                ascii2.push(String.fromCharCode(upper))
            }
        }else if(97 <= item && item <= 122){
            var lower = item + n;
            if(lower > 122){
                var tmp = lower - 122 + 96
                ascii2.push(String.fromCharCode(tmp))
            }else{
                ascii2.push(String.fromCharCode(lower))
            }
        }else{
            ascii2.push(String.fromCharCode(item))
    }
    })
    // 32 제외
    // 65~ 90, 97~122
    return ascii2.join("");
}