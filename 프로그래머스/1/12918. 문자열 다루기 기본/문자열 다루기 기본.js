function solution(s) {
    var answer = true;
    var arr = [...s]
    var regex = /\d/g;
    if(s.length === 4|| s.length ===6){
        console.log("4or6")
        for(i=0;i<arr.length;i++){
            console.log(i)
            if(isNaN(arr[i])){
                return false;
            }
        }
    }else{
        return false;
    }
    return answer;
}