function solution(s) {
    var arr = [...s];
    var arr1 = [];
    var cnt = 0; // 제거한 0 개수
    var func = 0; // 함수 실행한 횟수
    while(arr.length !== 1){
     f1();   
     func++;
    }

    return [func, cnt];
    

                        
function f1(){
    for(i=0; i<arr.length; i++){
        if(arr[i] == 0){
            var zero = arr.splice(i,1, "");
            cnt ++;
        }
    }
        arr = [...arr.join("").length.toString(2)];
        console.log(arr);           
}
}