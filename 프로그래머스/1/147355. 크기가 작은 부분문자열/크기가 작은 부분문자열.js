function solution(t, p) {
    var answer = 0;
    var arr = [...t];

    while(arr.length >=p.length){
        func(arr);
    }
    
    function func(arr){
        var arr1 = arr.slice(0, p.length).join("");
        if(arr1 <= p){
            answer++;
        }
            arr.shift();
    }
    return answer;
}